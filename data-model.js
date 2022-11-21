/* eslint-disable no-param-reassign */
import { nsd73, nsd74 } from './nsd/nsd.js';
export const data = {};
Array.from(nsd74.querySelectorAll('LNClasses > LNClass')).forEach(lnClass => {
    const name = lnClass.getAttribute('name');
    data[name] = {
        element: lnClass,
        dependencies: {},
    };
});
function abstractClasses(lnClassName) {
    var _a, _b;
    if (lnClassName === '')
        return [];
    const abstractBase = abstractClasses((_b = (_a = nsd74
        .querySelector(`LNClass[name="${lnClassName}"], AbstractLNClass[name="${lnClassName}"]`)) === null || _a === void 0 ? void 0 : _a.getAttribute('base')) !== null && _b !== void 0 ? _b : '');
    return Array.from(nsd74.querySelectorAll(`AbstractLNClass[name="${lnClassName}"]`)).concat(abstractBase);
}
// FIXME: remove and get info from data model
function getDOs(lnClassName) {
    const lnClass = nsd74.querySelector(`LNClasses > LNClass[name="${lnClassName}"]`);
    if (!lnClass)
        return [];
    const abstractLnClasses = abstractClasses(lnClassName);
    return [lnClass]
        .concat(abstractLnClasses)
        .flatMap(lnc => Array.from(lnc.querySelectorAll('DataObject')));
}
function parseCDC(path) {
    var _a, _b, _c, _d;
    const [lnClassName, doName, sdoName] = path;
    const doCDC = (_b = (_a = getDOs(lnClassName)) === null || _a === void 0 ? void 0 : _a.find(dataObject => dataObject.getAttribute('name') === doName)) === null || _b === void 0 ? void 0 : _b.getAttribute('type');
    if (path.length === 2)
        return doCDC;
    return ((_d = (_c = nsd73
        .querySelector(`CDCs > CDC[name="${doCDC}"] > SubDataObject[name="${sdoName}"]`)) === null || _c === void 0 ? void 0 : _c.getAttribute('type')) !== null && _d !== void 0 ? _d : '');
}
export function addSDAs(dataModel) {
    const das = new Set();
    Object.values(dataModel).forEach(({ dependencies: dos }) => {
        Object.values(dos).forEach(({ dependencies: sdos }) => {
            Object.values(sdos).forEach(({ element: sdo, dependencies: ssdos }) => {
                if (sdo.tagName === 'DataAttribute')
                    das.add({
                        element: sdo,
                        dependencies: ssdos,
                    });
                Object.values(ssdos).forEach(({ element: ssdo, dependencies: sdas }) => {
                    if (ssdo.tagName === 'DataAttribute')
                        das.add({
                            element: ssdo,
                            dependencies: sdas,
                        });
                });
            });
        });
    });
    das.forEach(({ element: da, dependencies: sdas }) => {
        if (da.getAttribute('typeKind') === 'ENUMERATED') {
            Array.from(nsd73.querySelectorAll(`Enumerations > Enumeration[name="${da.getAttribute('type')}"] > Literal`)).forEach(literal => {
                sdas[literal.getAttribute('name')] = {
                    element: literal,
                    dependencies: {},
                };
            }); // FIXME: Get Enumerations, ConstructedAttributes etc from other nsds
        }
        if (da.getAttribute('typeKind') !== 'CONSTRUCTED')
            return;
        Array.from(nsd73.querySelectorAll(`ConstructedAttributes > ConstructedAttribute[name="${da.getAttribute('type')}"] > SubDataAttribute`)).forEach(sda => {
            sdas[sda.getAttribute('name')] = { element: sda, dependencies: {} };
            das.add(sdas[sda.getAttribute('name')]);
        });
    });
}
function addDAs(dataModel) {
    Object.values(dataModel).forEach(({ dependencies: dos }) => {
        Object.values(dos).forEach(({ element: dataObject, dependencies: sdos }) => {
            const cdc = dataObject.getAttribute('type');
            Array.from(nsd73.querySelectorAll(`CDCs > CDC[name="${cdc}"] > DataAttribute`)).forEach(da => {
                sdos[da.getAttribute('name')] = { element: da, dependencies: {} };
            });
            Object.values(sdos).forEach(({ element: subDataObject, dependencies: das }) => {
                const scdc = subDataObject.getAttribute('type');
                Array.from(nsd73.querySelectorAll(`CDCs > CDC[name="${scdc}"] > DataAttribute`)).forEach(da => {
                    das[da.getAttribute('name')] = { element: da, dependencies: {} };
                });
            });
        });
    });
}
function addSDOs(dataModel) {
    Object.values(dataModel).forEach(({ element: lnClass, dependencies: dos }) => {
        const lnClassName = lnClass.getAttribute('name');
        Object.values(dos).forEach(({ element, dependencies }) => {
            const doName = element.getAttribute('name');
            const cdc = parseCDC([lnClassName, doName]);
            Array.from(nsd73.querySelectorAll(`CDCs > CDC[name="${cdc}"] > SubDataObject`)).forEach(sdo => {
                const sdoName = sdo.getAttribute('name');
                dependencies[sdoName] = {
                    element: sdo,
                    dependencies: {},
                };
                const scdc = parseCDC([lnClassName, doName, sdoName]);
                Array.from(nsd73.querySelectorAll(`CDCs > CDC[name="${scdc}"] > SubDataObject`)).forEach(ssdo => {
                    dependencies[sdoName].dependencies[ssdo.getAttribute('name')] = {
                        element: ssdo,
                        dependencies: {},
                    };
                });
            });
        });
    });
}
function addDOs(dataModel) {
    Object.values(dataModel).forEach(({ element }) => {
        const lnClassName = element.getAttribute('name');
        abstractClasses(lnClassName)
            .concat([element])
            .flatMap(lnc => Array.from(lnc.querySelectorAll('DataObject')))
            .forEach(dObj => {
            dataModel[lnClassName].dependencies[dObj.getAttribute('name')] = {
                element: dObj,
                dependencies: {},
            };
        });
    });
}
addDOs(data);
addSDOs(data);
addDAs(data);
addSDAs(data);
//# sourceMappingURL=data-model.js.map