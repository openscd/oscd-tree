const nsdStrings = [
    `<?xml version="1.0" encoding="UTF-8"?>
<NS xmlns="http://www.iec.ch/61850/2016/NSD"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.iec.ch/61850/2016/NSD NSD.xsd"
    id="IEC 61850-7-2"
    version="2007"
    revision="B"
    release="3"
    umlVersion="WG10built4"
    umlDate="2019-10-02T00:00:00Z"
    publicationStage="IS">
   <Copyright>
         <Notice>
			COPYRIGHT (c) IEC, www.iec.ch/tc57/supportdocuments. This version of this NSD is part of IEC_61850-7-2:2010 Edition 2.1; see the IEC_61850-7-2:2010 Edition 2.1 for full legal notices. In case of any differences between the here-below code and the IEC published content, the here-below definition supersedes the IEC publication; it may contain updates. See history files. The whole document has to be taken into account to have a full description of this code component.
			See www.iec.ch/CCv1 for copyright details.
			</Notice>
         <License uri="www.iec.ch/CCv1" kind="Standard"/>
      </Copyright>
   <Changes version="2007"
            revision="A"
            tissues="728, 730, 778, 780, 783, 786, 813, 820, 850, 852, 858, 860, 861, 869, 875, 876, 943, 970, 1038, 1050, 1061, 1062, 1071, 1091, 1092, 1116, 1122, 1127, 1145, 1154, 1194, 1202, 1232, 1242, 1252, 1276, 1283, 1307, 1308, 1319, 1338, 1341, 1356, 1377, 1386, 1428, 1432, 1433, 1435, 1439, 1455, 1569,  1589, 1622, 1630, 1650, 1652"/>
   <BasicTypes>
         <BasicType name="BOOLEAN" descID="IEC61850_7_2.BasicTypes::P_BOOLEAN.cl.desc"/>
         <BasicType name="INT8" descID="IEC61850_7_2.BasicTypes::P_INT8.cl.desc"/>
         <BasicType name="INT16" descID="IEC61850_7_2.BasicTypes::P_INT16.cl.desc"/>
         <BasicType name="INT32" descID="IEC61850_7_2.BasicTypes::P_INT32.cl.desc"/>
         <BasicType name="INT64" descID="IEC61850_7_2.BasicTypes::P_INT64.cl.desc"/>
         <BasicType name="INT8U" descID="IEC61850_7_2.BasicTypes::P_INT8U.cl.desc"/>
         <BasicType name="INT16U" descID="IEC61850_7_2.BasicTypes::P_INT16U.cl.desc"/>
         
         <BasicType name="INT32U" descID="IEC61850_7_2.BasicTypes::P_INT32U.cl.desc"/>
         <BasicType name="FLOAT32" descID="IEC61850_7_2.BasicTypes::P_FLOAT32.cl.desc"/>
         <BasicType name="Octet64" descID="IEC61850_7_2.BasicTypes::P_Octet64.cl.desc"/>
         <BasicType name="VisString64"
                 descID="IEC61850_7_2.BasicTypes::P_VisString64.cl.desc"/>
         <BasicType name="VisString129"
                 descID="IEC61850_7_2.BasicTypes::P_VisString129.cl.desc"/>
         <BasicType name="VisString255"
                 descID="IEC61850_7_2.BasicTypes::P_VisString255.cl.desc"/>
         <BasicType name="Unicode255"
                 descID="IEC61850_7_2.BasicTypes::P_Unicode255.cl.desc"/>
         <BasicType name="PhyComAddr"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_PhyComAddr.cl.desc"/>
         
         <BasicType name="ObjRef"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_ObjectReference.cl.desc"/>
         <BasicType name="EntryID"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_EntryID.cl.desc"/>
         <BasicType name="Currency"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_Currency.cl.desc"/>
         <BasicType name="Timestamp"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_Timestamp.cl.desc"/>
         
         <BasicType name="Quality"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_Quality.cl.desc"/>
         
         <BasicType name="EntryTime"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_EntryTime.cl.desc"/>
         <BasicType name="TrgOps"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_TriggerConditions.cl.desc"/>
         <BasicType name="OptFlds"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_RCBReportOptions.cl.desc"/>
         
         <BasicType name="SvOptFlds"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_SVMessageOptions.cl.desc"/>
         <BasicType name="Check"
                 descID="IEC61850_7_2.DomainTypesGeneral::P_CheckConditions.cl.desc"/>
         <BasicType name="Tcmd"
                 descID="IEC61850_7_2.DomainTypesCodedEnums::StepControlKind.cl.desc"/>
         <BasicType name="Dbpos"
                 descID="IEC61850_7_2.DomainTypesCodedEnums::DpStatusKind.cl.desc"/>
         
         
      </BasicTypes>
   <FunctionalConstraints>
         <FunctionalConstraint abbreviation="ST"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.ST.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="GoCB"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
               <DataSetMemberOf cb="SVCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="MX"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.MX.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="GoCB"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
               <DataSetMemberOf cb="SVCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="SP"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.SP.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="SetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="GoCB"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="SV"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.SV.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="SetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <Service name="SetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="CF"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.CF.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="SetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <Service name="SetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="DC"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.DC.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="SetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <Service name="SetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="SG"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.SG.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="SE"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.SE.title">
            <ApplicableServices>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetEditSGValue"/>
               <Service name="SetEditSGValue"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="SR"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.SR.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="OR"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.OR.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="GoCB"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="BL"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.BL.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="SetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <Service name="SetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
         <FunctionalConstraint abbreviation="EX"
                            titleID="IEC61850_7_2.FunctionalConstraints::FcKind.EX.title">
            <ApplicableServices>
               <Service name="GetDataValues"/>
               <Service name="GetDataDefinition"/>
               <Service name="GetDataDirectory"/>
               <Service name="GetDataSetValues"/>
               <DataSetMemberOf cb="RCB"/>
               <DataSetMemberOf cb="LCB"/>
            </ApplicableServices>
         </FunctionalConstraint>
      </FunctionalConstraints>
   <PresenceConditions>
         <PresenceCondition name="M"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.M.desc"/>
         <PresenceCondition name="O"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.O.desc"/>
         <PresenceCondition name="F"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.F.desc"/>
         <PresenceCondition name="na"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.na.desc"/>
         <PresenceCondition name="Mmulti"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.Mmulti.desc"/>
         <PresenceCondition name="Omulti"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.Omulti.desc"/>
         <PresenceCondition name="AtLeastOne"
                         argument="n"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.AtLeastOne(n).desc"/>
         <PresenceCondition name="AtMostOne"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.AtMostOne.desc"/>
         <PresenceCondition name="AllOrNonePerGroup"
                         argument="n"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.AllOrNonePerGroup(n).desc"/>
         <PresenceCondition name="AllOnlyOneGroup"
                         argument="n"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.AllOnlyOneGroup(n).desc"/>
         <PresenceCondition name="AllAtLeastOneGroup"
                         argument="n"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.AllAtLeastOneGroup(n).desc"/>
         <PresenceCondition name="MF"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MF(sibling).desc"/>
         <PresenceCondition name="MO"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MO(sibling).desc"/>
         <PresenceCondition name="OM"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.OM(sibling).desc"/>
         <PresenceCondition name="FM"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.FM(sibling).desc"/>
         <PresenceCondition name="MOcond"
                         argument="condID"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOcond(condID).desc"/>
         <PresenceCondition name="MFcond"
                         argument="condID"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFcond(condID).desc"/>
         <PresenceCondition name="OFcond"
                         argument="condID"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.OFcond(condID).desc"/>
         <PresenceCondition name="MmultiRange"
                         argument="min, max"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MmultiRange(min,_max).desc"/>
         <PresenceCondition name="OmultiRange"
                         argument="min, max"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.OmultiRange(min,_max).desc"/>
         <PresenceCondition name="MFsubst"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFsubst.desc"/>
         <PresenceCondition name="MOln0"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOln0.desc"/>
         <PresenceCondition name="MFln0"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFln0.desc"/>
         <PresenceCondition name="MOlnNs"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOlnNs.desc"/>
         <PresenceCondition name="MOdataNs"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOdataNs.desc"/>
         <PresenceCondition name="MFscaledAV"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFscaledAV.desc"/>
         <PresenceCondition name="MFscaledMagV"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFscaledMagV.desc"/>
         <PresenceCondition name="MFscaledAngV"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MFscaledAngV.desc"/>
         <PresenceCondition name="MOrms"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOrms.desc"/>
         <PresenceCondition name="MOrootLD"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOrootLD.desc"/>
         <PresenceCondition name="MOoperTm"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOoperTm.desc"/>
         <PresenceCondition name="MmultiF"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MmultiF(sibling).desc"/>
         <PresenceCondition name="MOsbo"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOsbo.desc"/>
         <PresenceCondition name="MOenhanced"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MOenhanced.desc"/>
         <PresenceCondition name="MONamPlt"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MONamPlt.desc"/>
         <PresenceCondition name="OF"
                         argument="sibling"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.OF(sibling).desc"/>
         <PresenceCondition name="MORange"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MORange.desc"/>
         <PresenceCondition name="OMSynPh"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.OMSynPh.desc"/>
         <PresenceCondition name="MAllOrNonePerGroup"
                         argument="n"
                         descID="IEC61850_7_2.PresenceConditions::PresenceCondition.MAllOrNonePerGroup(n).desc"/>
      </PresenceConditions>
   <Enumerations>
         <Enumeration name="ServiceNameKind"
                   titleID="IEC61850_7_2.DomainTypesEnums::ServiceNameKind.cl.title">
            <Literal name="Unknown" literalVal="0"/>
            <Literal name="Associate" literalVal="1"/>
            <Literal name="Abort" literalVal="2"/>
            <Literal name="Release" literalVal="3"/>
            <Literal name="GetServerDirectory" literalVal="4"/>
            <Literal name="GetLogicalDeviceDirectory" literalVal="5"/>
            <Literal name="GetAllDataValues" literalVal="6"/>
            <Literal name="GetDataValues" literalVal="7"/>
            <Literal name="SetDataValues" literalVal="8"/>
            <Literal name="GetDataDirectory" literalVal="9"/>
            <Literal name="GetDataDefinition" literalVal="10"/>
            <Literal name="GetDataSetValues" literalVal="11"/>
            <Literal name="SetDataSetValues" literalVal="12"/>
            <Literal name="CreateDataSet" literalVal="13"/>
            <Literal name="DeleteDataSet" literalVal="14"/>
            <Literal name="GetDataSetDirectory" literalVal="15"/>
            <Literal name="SelectActiveSG" literalVal="16"/>
            <Literal name="SelectEditSG" literalVal="17"/>
            <Literal name="SetEditSGValue" literalVal="18"/>
            <Literal name="ConfirmEditSGValues" literalVal="19"/>
            <Literal name="GetEditSGValue" literalVal="20"/>
            <Literal name="GetSGCBValues" literalVal="21"/>
            <Literal name="Report" literalVal="22"/>
            <Literal name="GetBRCBValues" literalVal="23"/>
            <Literal name="SetBRCBValues" literalVal="24"/>
            <Literal name="GetURCBValues" literalVal="25"/>
            <Literal name="SetURCBValues" literalVal="26"/>
            <Literal name="GetLCBValues" literalVal="27"/>
            <Literal name="SetLCBValues" literalVal="28"/>
            <Literal name="QueryLogByTime" literalVal="29"/>
            <Literal name="QueryLogAfter" literalVal="30"/>
            <Literal name="GetLogStatusValues" literalVal="31"/>
            <Literal name="SendGOOSEMessage" literalVal="32"/>
            <Literal name="GetGoCBValues" literalVal="33"/>
            <Literal name="SetGoCBValues" literalVal="34"/>
            <Literal name="GetGoReference" literalVal="35"/>
            <Literal name="GetGOOSEElementNumber" literalVal="36"/>
            <Literal name="SendMSVMessage" literalVal="37"/>
            <Literal name="GetMSVCBValues" literalVal="38"/>
            <Literal name="SetMSVCBValues" literalVal="39"/>
            <Literal name="SendUSVMessage" literalVal="40" deprecated="true"/>
            <Literal name="GetUSVCBValues" literalVal="41" deprecated="true"/>
            <Literal name="SetUSVCBValues" literalVal="42" deprecated="true"/>
            <Literal name="Select" literalVal="43"/>
            <Literal name="SelectWithValue" literalVal="44"/>
            <Literal name="Cancel" literalVal="45"/>
            <Literal name="Operate" literalVal="46"/>
            <Literal name="CommandTermination" literalVal="47"/>
            <Literal name="TimeActivatedOperate" literalVal="48"/>
            <Literal name="GetFile" literalVal="49"/>
            <Literal name="SetFile" literalVal="50"/>
            <Literal name="DeleteFile" literalVal="51"/>
            <Literal name="GetFileAttributeValues" literalVal="52"/>
            <Literal name="TimeSynchronization" literalVal="53"/>
            <Literal name="InternalChange" literalVal="54"/>
            <Literal name="GetLogicalNodeDirectory" literalVal="55"/>
            <Literal name="GetMsvReference" literalVal="56"/>
            <Literal name="GetMSVElementNumber" literalVal="57"/>
         </Enumeration>
         <Enumeration name="ServiceStatusKind"
                   titleID="IEC61850_7_2.DomainTypesEnums::ServiceStatusKind.cl.title">
            <Literal name="no-error" literalVal="0"/>
            <Literal name="instance-not-available" literalVal="1"/>
            <Literal name="instance-in-use" literalVal="2"/>
            <Literal name="access-violation" literalVal="3"/>
            <Literal name="access-not-allowed-in-current-state" literalVal="4"/>
            <Literal name="parameter-value-inappropriate" literalVal="5"/>
            <Literal name="parameter-value-inconsistent" literalVal="6"/>
            <Literal name="class-not-supported" literalVal="7"/>
            <Literal name="instance-locked-by-other-client" literalVal="8"/>
            <Literal name="control-must-be-selected" literalVal="9" deprecated="true"/>
            <Literal name="type-conflict" literalVal="10"/>
            <Literal name="failed-due-to-communications-constraint" literalVal="11"/>
            <Literal name="failed-due-to-server-constraint" literalVal="12"/>
         </Enumeration>
         <Enumeration name="OriginatorCategoryKind"
                   titleID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.cl.title">
            <Literal name="not-supported"
                  literalVal="0"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.not-supported.desc"/>
            <Literal name="bay-control"
                  literalVal="1"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.bay-control.desc"/>
            <Literal name="station-control"
                  literalVal="2"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.station-control.desc"/>
            <Literal name="remote-control"
                  literalVal="3"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.remote-control.desc"/>
            <Literal name="automatic-bay"
                  literalVal="4"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.automatic-bay.desc"/>
            <Literal name="automatic-station"
                  literalVal="5"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.automatic-station.desc"/>
            <Literal name="automatic-remote"
                  literalVal="6"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.automatic-remote.desc"/>
            <Literal name="maintenance"
                  literalVal="7"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.maintenance.desc"/>
            <Literal name="process"
                  literalVal="8"
                  descID="IEC61850_7_2.DomainTypesEnums::OriginatorCategoryKind.process.desc"/>
         </Enumeration>
         <Enumeration name="ControlServiceStatusKind"
                   titleID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.cl.title">
            <Literal name="Unknown"
                  literalVal="0"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Unknown.desc"/>
            <Literal name="Not-supported"
                  literalVal="1"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Not-supported.desc"/>
            <Literal name="Blocked-by-switching-hierarchy"
                  literalVal="2"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-switching-hierarchy.desc"/>
            <Literal name="Select-failed"
                  literalVal="3"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Select-failed.desc"/>
            <Literal name="Invalid-position"
                  literalVal="4"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Invalid-position.desc"/>
            <Literal name="Position-reached"
                  literalVal="5"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Position-reached.desc"/>
            <Literal name="Parameter-change-in-execution"
                  literalVal="6"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Parameter-change-in-execution.desc"/>
            <Literal name="Step-limit"
                  literalVal="7"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Step-limit.desc"/>
            <Literal name="Blocked-by-Mode"
                  literalVal="8"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-Mode.desc"/>
            <Literal name="Blocked-by-process"
                  literalVal="9"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-process.desc"/>
            <Literal name="Blocked-by-interlocking"
                  literalVal="10"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-interlocking.desc"/>
            <Literal name="Blocked-by-synchrocheck"
                  literalVal="11"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-synchrocheck.desc"/>
            <Literal name="Command-already-in-execution"
                  literalVal="12"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Command-already-in-execution.desc"/>
            <Literal name="Blocked-by-health"
                  literalVal="13"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-health.desc"/>
            <Literal name="1-of-n-control"
                  literalVal="14"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.1-of-n-control.desc"/>
            <Literal name="Abortion-by-cancel"
                  literalVal="15"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Abortion-by-cancel.desc"/>
            <Literal name="Time-limit-over"
                  literalVal="16"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Time-limit-over.desc"/>
            <Literal name="Abortion-by-trip"
                  literalVal="17"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Abortion-by-trip.desc"/>
            <Literal name="Object-not-selected"
                  literalVal="18"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Object-not-selected.desc"/>
            <Literal name="Object-already-selected"
                  literalVal="19"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Object-already-selected.desc"/>
            <Literal name="No-access-authority"
                  literalVal="20"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.No-access-authority.desc"/>
            <Literal name="Ended-with-overshoot"
                  literalVal="21"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Ended-with-overshoot.desc"/>
            <Literal name="Abortion-due-to-deviation"
                  literalVal="22"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Abortion-due-to-deviation.desc"/>
            <Literal name="Abortion-by-communication-loss"
                  literalVal="23"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Abortion-by-communication-loss.desc"/>
            <Literal name="Blocked-by-command"
                  literalVal="24"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Blocked-by-command.desc"/>
            <Literal name="None"
                  literalVal="25"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.None.desc"/>
            <Literal name="Inconsistent-parameters"
                  literalVal="26"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Inconsistent-parameters.desc"/>
            <Literal name="Locked-by-other-client"
                  literalVal="27"
                  descID="IEC61850_7_2.DomainTypesEnums::ControlServiceStatusKind.Locked-by-other-client.desc"/>
         </Enumeration>
         <Enumeration name="SamplingModeKind"
                   titleID="IEC61850_7_2.DomainTypesEnums::SamplingModeKind.cl.title">
            <Literal name="SamplesPerPeriod" literalVal="0"/>
            <Literal name="SamplesPerSecond" literalVal="1"/>
            <Literal name="SecondsPerSample" literalVal="2"/>
         </Enumeration>
      </Enumerations>
   <ConstructedAttributes>
         <ConstructedAttribute name="Originator"
                            titleID="IEC61850_7_2.DomainTypesGeneral::S_Originator.cl.title">
            <SubDataAttribute name="orCat"
                           type="OriginatorCategoryKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orCat.desc"
                           presCond="M"/>
            <SubDataAttribute name="orIdent"
                           type="Octet64"
                           descID="IEC61850_7_2.DomainTypesGeneral::S_Originator.orIdent.desc"
                           presCond="M"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
</NS>
  `,
    `<?xml version="1.0" encoding="UTF-8"?>
<NS xmlns="http://www.iec.ch/61850/2016/NSD"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.iec.ch/61850/2016/NSD NSD.xsd"
    id="IEC 61850-7-3"
    version="2007"
    revision="B"
    release="3"
    umlVersion="WG10built3"
    umlDate="2019-10-02T00:00:00Z"
    publicationStage="IS">
   <Copyright>
         <Notice>
			COPYRIGHT (c) IEC, www.iec.ch/tc57/supportdocuments. This version of this NSD is part of IEC_61850-7-3:2010 Edition 2.1; see the IEC_61850-7-3:2010 Edition 2.1 for full legal notices. In case of any differences between the here-below code and the IEC published content, the here-below definition supersedes the IEC publication; it may contain updates. See history files. The whole document has to be taken into account to have a full description of this code component.
			See www.iec.ch/CCv1 for copyright details.
			</Notice>
         <License uri="www.iec.ch/CCv1" kind="Standard"/>
      </Copyright>
   <Changes version="2007"
            revision="A"
            tissues="690, 691, 692, 697, 698, 707, 709, 711, 722, 814, 816, 819, 832, 839, 846, 868, 887, 919, 924, 925, 926, 929, 953, 954, 962, 968, 996, 1078, 1079, 1122, 1127, 1184, 1187, 1189, 1220, 1233, 1240, 1242, 1247, 1253, 1265, 1270, 1311, 1372, 1387, 1388, 1403, 1430, 1438, 1578, 1581, 1598, 1602, 1623"/>
   <DependsOn id="IEC 61850-7-2" version="2007" revision="B"/>
   <Enumerations>
         <Enumeration name="AngleReferenceKind"
                   titleID="IEC61850_7_3.DAEnums::AngleReferenceKind.cl.title">
            <Literal name="V" literalVal="0"/>
            <Literal name="A" literalVal="1"/>
            <Literal name="other" literalVal="2"/>
            <Literal name="Synchrophasor"
                  literalVal="3"
                  descID="IEC61850_7_3.DAEnums::AngleReferenceKind.Synchrophasor.desc"/>
         </Enumeration>
         <Enumeration name="CtlModelKind"
                   titleID="IEC61850_7_3.DAEnums::CtlModelKind.cl.title">
            <Literal name="status-only"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.status-only.desc"/>
            <Literal name="direct-with-normal-security"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.direct-with-normal-security.desc"/>
            <Literal name="sbo-with-normal-security"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.sbo-with-normal-security.desc"/>
            <Literal name="direct-with-enhanced-security"
                  literalVal="3"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.direct-with-enhanced-security.desc"/>
            <Literal name="sbo-with-enhanced-security"
                  literalVal="4"
                  descID="IEC61850_7_3.DAEnums::CtlModelKind.sbo-with-enhanced-security.desc"/>
         </Enumeration>
         <Enumeration name="CurveCharKind"
                   titleID="IEC61850_7_3.DAEnums::CurveCharKind.cl.title">
            <Literal name="None"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.None.desc"/>
            <Literal name="ANSI Extremely Inverse"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.ANSI_Extremely_Inverse.desc"/>
            <Literal name="ANSI Very Inverse"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.ANSI_Very_Inverse.desc"/>
            <Literal name="ANSI Normal Inverse" literalVal="3" deprecated="true"/>
            <Literal name="ANSI Moderate Inverse"
                  literalVal="4"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.ANSI_Moderate_Inverse.desc"/>
            <Literal name="ANSI Definite Time"
                  literalVal="5"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.ANSI_Definite_Time.desc"/>
            <Literal name="Long-Time Extremely Inverse" literalVal="6" deprecated="true"/>
            <Literal name="Long-Time Very Inverse" literalVal="7" deprecated="true"/>
            <Literal name="Long-Time Inverse" literalVal="8" deprecated="true"/>
            <Literal name="IEC Normal Inverse" literalVal="9" deprecated="true"/>
            <Literal name="IEC Very Inverse"
                  literalVal="10"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.IEC_Very_Inverse.desc"/>
            <Literal name="IEC Inverse"
                  literalVal="11"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.IEC_Inverse.desc"/>
            <Literal name="IEC Extremely Inverse"
                  literalVal="12"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.IEC_Extremely_Inverse.desc"/>
            <Literal name="IEC Short-Time Inverse" literalVal="13" deprecated="true"/>
            <Literal name="IEC Long-Time Inverse" literalVal="14" deprecated="true"/>
            <Literal name="IEC Definite Time"
                  literalVal="15"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.IEC_Definite_Time.desc"/>
            <Literal name="Reserved" literalVal="16"/>
            <Literal name="Polynom 1"
                  literalVal="17"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_1.desc"/>
            <Literal name="Polynom 2"
                  literalVal="18"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_2.desc"/>
            <Literal name="Polynom 3"
                  literalVal="19"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_3.desc"/>
            <Literal name="Polynom 4"
                  literalVal="20"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_4.desc"/>
            <Literal name="Polynom 5"
                  literalVal="21"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_5.desc"/>
            <Literal name="Polynom 6"
                  literalVal="22"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_6.desc"/>
            <Literal name="Polynom 7"
                  literalVal="23"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_7.desc"/>
            <Literal name="Polynom 8"
                  literalVal="24"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_8.desc"/>
            <Literal name="Polynom 9"
                  literalVal="25"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_9.desc"/>
            <Literal name="Polynom 10"
                  literalVal="26"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_10.desc"/>
            <Literal name="Polynom 11"
                  literalVal="27"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_11.desc"/>
            <Literal name="Polynom 12"
                  literalVal="28"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_12.desc"/>
            <Literal name="Polynom 13"
                  literalVal="29"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_13.desc"/>
            <Literal name="Polynom 14"
                  literalVal="30"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_14.desc"/>
            <Literal name="Polynom 15"
                  literalVal="31"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_15.desc"/>
            <Literal name="Polynom 16"
                  literalVal="32"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Polynom_16.desc"/>
            <Literal name="Multiline 1"
                  literalVal="33"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_1.desc"/>
            <Literal name="Multiline 2"
                  literalVal="34"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_2.desc"/>
            <Literal name="Multiline 3"
                  literalVal="35"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_3.desc"/>
            <Literal name="Multiline 4"
                  literalVal="36"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_4.desc"/>
            <Literal name="Multiline 5"
                  literalVal="37"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_5.desc"/>
            <Literal name="Multiline 6"
                  literalVal="38"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_6.desc"/>
            <Literal name="Multiline 7"
                  literalVal="39"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_7.desc"/>
            <Literal name="Multiline 8"
                  literalVal="40"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_8.desc"/>
            <Literal name="Multiline 9"
                  literalVal="41"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_9.desc"/>
            <Literal name="Multiline 10"
                  literalVal="42"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_10.desc"/>
            <Literal name="Multiline 11"
                  literalVal="43"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_11.desc"/>
            <Literal name="Multiline 12"
                  literalVal="44"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_12.desc"/>
            <Literal name="Multiline 13"
                  literalVal="45"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_13.desc"/>
            <Literal name="Multiline 14"
                  literalVal="46"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_14.desc"/>
            <Literal name="Multiline 15"
                  literalVal="47"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_15.desc"/>
            <Literal name="Multiline 16"
                  literalVal="48"
                  descID="IEC61850_7_3.DAEnums::CurveCharKind.Multiline_16.desc"/>
         </Enumeration>
         <Enumeration name="FaultDirectionKind"
                   titleID="IEC61850_7_3.DAEnums::FaultDirectionKind.cl.title">
            <Literal name="unknown" literalVal="0"/>
            <Literal name="forward" literalVal="1"/>
            <Literal name="backward" literalVal="2"/>
            <Literal name="both" literalVal="3"/>
         </Enumeration>
         <Enumeration name="HvReferenceKind"
                   titleID="IEC61850_7_3.DAEnums::HvReferenceKind.cl.title">
            <Literal name="fundamental" literalVal="0"/>
            <Literal name="rms" literalVal="1"/>
            <Literal name="absolute" literalVal="2"/>
         </Enumeration>
         <Enumeration name="MonthKind" titleID="IEC61850_7_3.DAEnums::MonthKind.cl.title">
            <Literal name="reserved" literalVal="0"/>
            <Literal name="January" literalVal="1"/>
            <Literal name="February" literalVal="2"/>
            <Literal name="March" literalVal="3"/>
            <Literal name="April" literalVal="4"/>
            <Literal name="May" literalVal="5"/>
            <Literal name="June" literalVal="6"/>
            <Literal name="July" literalVal="7"/>
            <Literal name="August" literalVal="8"/>
            <Literal name="September" literalVal="9"/>
            <Literal name="October" literalVal="10"/>
            <Literal name="November" literalVal="11"/>
            <Literal name="December" literalVal="12"/>
         </Enumeration>
         <Enumeration name="MultiplierKind"
                   titleID="IEC61850_7_3.DAEnums::MultiplierKind.cl.title">
            <Literal name="y"
                  literalVal="-24"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.y.desc"/>
            <Literal name="z"
                  literalVal="-21"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.z.desc"/>
            <Literal name="a"
                  literalVal="-18"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.a.desc"/>
            <Literal name="f"
                  literalVal="-15"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.f.desc"/>
            <Literal name="p"
                  literalVal="-12"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.p.desc"/>
            <Literal name="n"
                  literalVal="-9"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.n.desc"/>
            <Literal name="µ"
                  literalVal="-6"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind._micro.desc"/>
            <Literal name="m"
                  literalVal="-3"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.m.desc"/>
            <Literal name="c"
                  literalVal="-2"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.c.desc"/>
            <Literal name="d"
                  literalVal="-1"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.d.desc"/>
            <Literal name=""
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.none.desc"/>
            <Literal name="da"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.da.desc"/>
            <Literal name="h"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.h.desc"/>
            <Literal name="k"
                  literalVal="3"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.k.desc"/>
            <Literal name="M"
                  literalVal="6"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.M.desc"/>
            <Literal name="G"
                  literalVal="9"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.G.desc"/>
            <Literal name="T"
                  literalVal="12"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.T.desc"/>
            <Literal name="P"
                  literalVal="15"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.P.desc"/>
            <Literal name="E"
                  literalVal="18"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.E.desc"/>
            <Literal name="Z"
                  literalVal="21"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.Z.desc"/>
            <Literal name="Y"
                  literalVal="24"
                  descID="IEC61850_7_3.DAEnums::MultiplierKind.Y.desc"/>
         </Enumeration>
         <Enumeration name="OccurrenceKind"
                   titleID="IEC61850_7_3.DAEnums::OccurrenceKind.cl.title">
            <Literal name="Time" literalVal="0"/>
            <Literal name="WeekDay" literalVal="1"/>
            <Literal name="WeekOfYear" literalVal="2"/>
            <Literal name="DayOfMonth" literalVal="3"/>
            <Literal name="DayOfYear" literalVal="4"/>
            <Literal name="NONE"
                  literalVal="5"
                  descID="IEC61850_7_3.DAEnums::OccurrenceKind.NONE.desc"/>
         </Enumeration>
         <Enumeration name="OutputSignalKind"
                   titleID="IEC61850_7_3.DAEnums::OutputSignalKind.cl.title">
            <Literal name="pulse"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::OutputSignalKind.pulse.desc"/>
            <Literal name="persistent"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::OutputSignalKind.persistent.desc"/>
            <Literal name="persistent-feedback"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::OutputSignalKind.persistent-feedback.desc"/>
         </Enumeration>
         <Enumeration name="PeriodKind" titleID="IEC61850_7_3.DAEnums::PeriodKind.cl.title">
            <Literal name="Hour" literalVal="0"/>
            <Literal name="Day" literalVal="1"/>
            <Literal name="Week" literalVal="2"/>
            <Literal name="Month" literalVal="3"/>
            <Literal name="Year" literalVal="4"/>
         </Enumeration>
         <Enumeration name="PhaseAngleReferenceKind"
                   titleID="IEC61850_7_3.DAEnums::PhaseAngleReferenceKind.cl.title">
            <Literal name="Va" literalVal="0"/>
            <Literal name="Vb" literalVal="1"/>
            <Literal name="Vc" literalVal="2"/>
            <Literal name="Aa" literalVal="3"/>
            <Literal name="Ab" literalVal="4"/>
            <Literal name="Ac" literalVal="5"/>
            <Literal name="Vab" literalVal="6"/>
            <Literal name="Vbc" literalVal="7"/>
            <Literal name="Vca" literalVal="8"/>
            <Literal name="Vother" literalVal="9"/>
            <Literal name="Aother" literalVal="10"/>
            <Literal name="Synchrophasor"
                  literalVal="11"
                  descID="IEC61850_7_3.DAEnums::PhaseAngleReferenceKind.Synchrophasor.desc"/>
         </Enumeration>
         <Enumeration name="PhaseFaultDirectionKind"
                   titleID="IEC61850_7_3.DAEnums::PhaseFaultDirectionKind.cl.title">
            <Literal name="unknown" literalVal="0"/>
            <Literal name="forward" literalVal="1"/>
            <Literal name="backward" literalVal="2"/>
         </Enumeration>
         <Enumeration name="PhaseReferenceKind"
                   titleID="IEC61850_7_3.DAEnums::PhaseReferenceKind.cl.title">
            <Literal name="A" literalVal="0"/>
            <Literal name="B" literalVal="1"/>
            <Literal name="C" literalVal="2"/>
            <Literal name="Synchrophasor" literalVal="3"/>
         </Enumeration>
         <Enumeration name="RangeKind" titleID="IEC61850_7_3.DAEnums::RangeKind.cl.title">
            <Literal name="normal" literalVal="0"/>
            <Literal name="high" literalVal="1"/>
            <Literal name="low" literalVal="2"/>
            <Literal name="high-high" literalVal="3"/>
            <Literal name="low-low" literalVal="4"/>
         </Enumeration>
         <Enumeration name="SIUnitKind" titleID="IEC61850_7_3.DAEnums::SIUnitKind.cl.title">
            <Literal name=""
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.none.desc"/>
            <Literal name="m"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m.desc"/>
            <Literal name="kg"
                  literalVal="3"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.kg.desc"/>
            <Literal name="s"
                  literalVal="4"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.s.desc"/>
            <Literal name="A"
                  literalVal="5"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.A.desc"/>
            <Literal name="K"
                  literalVal="6"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.K.desc"/>
            <Literal name="mol"
                  literalVal="7"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.mol.desc"/>
            <Literal name="cd"
                  literalVal="8"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.cd.desc"/>
            <Literal name="deg"
                  literalVal="9"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.deg.desc"/>
            <Literal name="rad"
                  literalVal="10"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.rad.desc"/>
            <Literal name="sr"
                  literalVal="11"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.sr.desc"/>
            <Literal name="Gy"
                  literalVal="21"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Gy.desc"/>
            <Literal name="Bq"
                  literalVal="22"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Bq.desc"/>
            <Literal name="°C"
                  literalVal="23"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind._deg_C.desc"/>
            <Literal name="Sv"
                  literalVal="24"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Sv.desc"/>
            <Literal name="F"
                  literalVal="25"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.F.desc"/>
            <Literal name="C"
                  literalVal="26"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.C.desc"/>
            <Literal name="S"
                  literalVal="27"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.S.desc"/>
            <Literal name="H"
                  literalVal="28"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.H.desc"/>
            <Literal name="V"
                  literalVal="29"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.V.desc"/>
            <Literal name="ohm"
                  literalVal="30"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.ohm.desc"/>
            <Literal name="J"
                  literalVal="31"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.J.desc"/>
            <Literal name="N"
                  literalVal="32"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.N.desc"/>
            <Literal name="Hz"
                  literalVal="33"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Hz.desc"/>
            <Literal name="lx"
                  literalVal="34"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.lx.desc"/>
            <Literal name="Lm"
                  literalVal="35"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Lm.desc"/>
            <Literal name="Wb"
                  literalVal="36"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Wb.desc"/>
            <Literal name="T"
                  literalVal="37"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.T.desc"/>
            <Literal name="W"
                  literalVal="38"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.W.desc"/>
            <Literal name="Pa"
                  literalVal="39"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Pa.desc"/>
            <Literal name="m²"
                  literalVal="41"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_sq_.desc"/>
            <Literal name="m³"
                  literalVal="42"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_cube_.desc"/>
            <Literal name="m/s"
                  literalVal="43"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_per_s.desc"/>
            <Literal name="m/s²"
                  literalVal="44"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_per_s_sq_.desc"/>
            <Literal name="m³/s"
                  literalVal="45"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_cube__per_s.desc"/>
            <Literal name="m/m³"
                  literalVal="46"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_per_m_cube_.desc"/>
            <Literal name="M"
                  literalVal="47"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.M.desc"/>
            <Literal name="kg/m³"
                  literalVal="48"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.kg_per_m_cube_.desc"/>
            <Literal name="m²/s"
                  literalVal="49"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.m_sq__per_s.desc"/>
            <Literal name="W/m K"
                  literalVal="50"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.W_per_m_K.desc"/>
            <Literal name="J/K"
                  literalVal="51"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.J_per_K.desc"/>
            <Literal name="ppm"
                  literalVal="52"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.ppm.desc"/>
            <Literal name="1/s"
                  literalVal="53"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.1_per_s.desc"/>
            <Literal name="rad/s"
                  literalVal="54"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.rad_per_s.desc"/>
            <Literal name="W/m²"
                  literalVal="55"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.W_per_m_sq_.desc"/>
            <Literal name="J/m²"
                  literalVal="56"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.J_per_m_sq_.desc"/>
            <Literal name="S/m"
                  literalVal="57"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.S_per_m.desc"/>
            <Literal name="K/s"
                  literalVal="58"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.K_per_s.desc"/>
            <Literal name="Pa/s"
                  literalVal="59"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Pa_per_s.desc"/>
            <Literal name="J/kg K"
                  literalVal="60"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.J_per_kg_K.desc"/>
            <Literal name="VA"
                  literalVal="61"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.VA.desc"/>
            <Literal name="Watts"
                  literalVal="62"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Watts.desc"
                  deprecated="true"/>
            <Literal name="VAr"
                  literalVal="63"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.VAr.desc"/>
            <Literal name="phi"
                  literalVal="64"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.phi.desc"
                  deprecated="true"/>
            <Literal name="cos(phi)"
                  literalVal="65"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.cos(phi).desc"/>
            <Literal name="Vs"
                  literalVal="66"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Vs.desc"/>
            <Literal name="V²"
                  literalVal="67"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.V_sq_.desc"/>
            <Literal name="As"
                  literalVal="68"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.As.desc"/>
            <Literal name="A²"
                  literalVal="69"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.A_sq_.desc"/>
            <Literal name="A²t"
                  literalVal="70"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.A_sq_t.desc"/>
            <Literal name="VAh"
                  literalVal="71"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.VAh.desc"/>
            <Literal name="Wh"
                  literalVal="72"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Wh.desc"/>
            <Literal name="VArh"
                  literalVal="73"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.VArh.desc"/>
            <Literal name="V/Hz"
                  literalVal="74"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.V_per_Hz.desc"/>
            <Literal name="Hz/s"
                  literalVal="75"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Hz_per_s.desc"/>
            <Literal name="char"
                  literalVal="76"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.char.desc"/>
            <Literal name="char/s"
                  literalVal="77"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.char_per_s.desc"/>
            <Literal name="kgm²"
                  literalVal="78"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.kgm_sq_.desc"/>
            <Literal name="dB"
                  literalVal="79"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.dB.desc"/>
            <Literal name="J/Wh"
                  literalVal="80"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.J_per_Wh.desc"/>
            <Literal name="W/s"
                  literalVal="81"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.W_per_s.desc"/>
            <Literal name="l/s"
                  literalVal="82"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.l_per_s.desc"/>
            <Literal name="dBm"
                  literalVal="83"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.dBm.desc"/>
            <Literal name="h"
                  literalVal="84"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.h.desc"/>
            <Literal name="min"
                  literalVal="85"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.min.desc"/>
            <Literal name="Ohm/m"
                  literalVal="86"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.Ohm_per_m.desc"/>
            <Literal name="percent/s"
                  literalVal="87"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.percent_per_s.desc"/>
            <Literal name="A/V"
                  literalVal="88"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.A_per_V.desc"/>
            <Literal name="A/Vs"
                  literalVal="89"
                  descID="IEC61850_7_3.DAEnums::SIUnitKind.A_per_Vs.desc"/>
         </Enumeration>
         <Enumeration name="SboClassKind"
                   titleID="IEC61850_7_3.DAEnums::SboClassKind.cl.title">
            <Literal name="operate-once"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::SboClassKind.operate-once.desc"/>
            <Literal name="operate-many"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::SboClassKind.operate-many.desc"/>
         </Enumeration>
         <Enumeration name="SequenceKind"
                   titleID="IEC61850_7_3.DAEnums::SequenceKind.cl.title">
            <Literal name="pos-neg-zero"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::SequenceKind.pos-neg-zero.desc"/>
            <Literal name="dir-quad-zero"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::SequenceKind.dir-quad-zero.desc"/>
         </Enumeration>
         <Enumeration name="SeverityKind"
                   titleID="IEC61850_7_3.DAEnums::SeverityKind.cl.title">
            <Literal name="unknown"
                  literalVal="0"
                  descID="IEC61850_7_3.DAEnums::SeverityKind.unknown.desc"/>
            <Literal name="critical"
                  literalVal="1"
                  descID="IEC61850_7_3.DAEnums::SeverityKind.critical.desc"/>
            <Literal name="major"
                  literalVal="2"
                  descID="IEC61850_7_3.DAEnums::SeverityKind.major.desc"/>
            <Literal name="minor"
                  literalVal="3"
                  descID="IEC61850_7_3.DAEnums::SeverityKind.minor.desc"/>
            <Literal name="warning"
                  literalVal="4"
                  descID="IEC61850_7_3.DAEnums::SeverityKind.warning.desc"/>
         </Enumeration>
         <Enumeration name="WeekdayKind" titleID="IEC61850_7_3.DAEnums::WeekdayKind.cl.title">
            <Literal name="reserved" literalVal="0"/>
            <Literal name="Monday" literalVal="1"/>
            <Literal name="Tuesday" literalVal="2"/>
            <Literal name="Wednesday" literalVal="3"/>
            <Literal name="Thursday" literalVal="4"/>
            <Literal name="Friday" literalVal="5"/>
            <Literal name="Saturday" literalVal="6"/>
            <Literal name="Sunday" literalVal="7"/>
         </Enumeration>
      </Enumerations>
   <ConstructedAttributes>
         <ConstructedAttribute name="ScaledValueConfig"
                            titleID="IEC61850_7_3.ConstructedDAs::ScaledValueConfig.cl.title">
            <SubDataAttribute name="scaleFactor"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::ScaledValueConfig.scaleFactor.desc"
                           presCond="M"/>
            <SubDataAttribute name="offset"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::ScaledValueConfig.offset.desc"
                           presCond="M"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="RangeConfig"
                            titleID="IEC61850_7_3.ConstructedDAs::RangeConfig.cl.title">
            <SubDataAttribute name="hhLim"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.hhLim.desc"
                           presCond="MORange"/>
            <SubDataAttribute name="hLim"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.hLim.desc"
                           presCond="MORange"/>
            <SubDataAttribute name="lLim"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.lLim.desc"
                           presCond="MORange"/>
            <SubDataAttribute name="llLim"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.llLim.desc"
                           presCond="MORange"/>
            <SubDataAttribute name="min"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.min.desc"
                           presCond="M"/>
            <SubDataAttribute name="max"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.max.desc"
                           presCond="M"/>
            <SubDataAttribute name="limDb"
                           type="INT32U"
                           minValue="0"
                           maxValue="100000"
                           descID="IEC61850_7_3.ConstructedDAs::RangeConfig.limDb.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="ValWithTrans"
                            titleID="IEC61850_7_3.ConstructedDAs::ValWithTrans.cl.title">
            <SubDataAttribute name="posVal"
                           type="INT8"
                           minValue="-64"
                           maxValue="63"
                           descID="IEC61850_7_3.ConstructedDAs::ValWithTrans.posVal.desc"
                           presCond="M"/>
            <SubDataAttribute name="transInd"
                           type="BOOLEAN"
                           descID="IEC61850_7_3.ConstructedDAs::ValWithTrans.transInd.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="PulseConfig"
                            titleID="IEC61850_7_3.ConstructedDAs::PulseConfig.cl.title">
            <SubDataAttribute name="cmdQual"
                           type="OutputSignalKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::PulseConfig.cmdQual.desc"
                           presCond="M"/>
            <SubDataAttribute name="onDur"
                           type="INT32U"
                           descID="IEC61850_7_3.ConstructedDAs::PulseConfig.onDur.desc"
                           presCond="M"/>
            <SubDataAttribute name="offDur"
                           type="INT32U"
                           descID="IEC61850_7_3.ConstructedDAs::PulseConfig.offDur.desc"
                           presCond="M"/>
            <SubDataAttribute name="numPls"
                           type="INT32U"
                           descID="IEC61850_7_3.ConstructedDAs::PulseConfig.numPls.desc"
                           presCond="M"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="Unit" titleID="IEC61850_7_3.ConstructedDAs::Unit.cl.title">
            <SubDataAttribute name="SIUnit"
                           type="SIUnitKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::Unit.SIUnit.desc"
                           presCond="M"/>
            <SubDataAttribute name="multiplier"
                           type="MultiplierKind"
                           typeKind="ENUMERATED"
                           defaultValue="none"
                           descID="IEC61850_7_3.ConstructedDAs::Unit.multiplier.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="Vector" titleID="IEC61850_7_3.ConstructedDAs::Vector.cl.title">
            <SubDataAttribute name="mag"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.ConstructedDAs::Vector.mag.desc"
                           presCond="M"/>
            <SubDataAttribute name="ang"
                           type="AnalogueValue"
                           typeKind="CONSTRUCTED"
                           minValue="-180"
                           maxValue="180"
                           descID="IEC61850_7_3.ConstructedDAs::Vector.ang.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="Point" titleID="IEC61850_7_3.ConstructedDAs::Point.cl.title">
            <SubDataAttribute name="xVal"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Point.xVal.desc"
                           presCond="M"/>
            <SubDataAttribute name="yVal"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Point.yVal.desc"
                           presCond="M"/>
            <SubDataAttribute name="zVal"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Point.zVal.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="Cell" titleID="IEC61850_7_3.ConstructedDAs::Cell.cl.title">
            <SubDataAttribute name="xStart"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Cell.xStart.desc"
                           presCond="M"/>
            <SubDataAttribute name="xEnd"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Cell.xEnd.desc"
                           presCond="O"/>
            <SubDataAttribute name="yStart"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Cell.yStart.desc"
                           presCond="O"/>
            <SubDataAttribute name="yEnd"
                           type="FLOAT32"
                           descID="IEC61850_7_3.ConstructedDAs::Cell.yEnd.desc"
                           presCond="O"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="CalendarTime"
                            titleID="IEC61850_7_3.ConstructedDAs::CalendarTime.cl.title">
            <SubDataAttribute name="occ"
                           type="INT16U"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.occ.desc"
                           presCond="M"/>
            <SubDataAttribute name="occType"
                           type="OccurrenceKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.occType.desc"
                           presCond="M"/>
            <SubDataAttribute name="occPer"
                           type="PeriodKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.occPer.desc"
                           presCond="M"/>
            <SubDataAttribute name="weekDay"
                           type="WeekdayKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.weekDay.desc"
                           presCond="M"/>
            <SubDataAttribute name="month"
                           type="MonthKind"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.month.desc"
                           presCond="M"/>
            <SubDataAttribute name="day"
                           type="INT8U"
                           minValue="1"
                           maxValue="31"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.day.desc"
                           presCond="M"/>
            <SubDataAttribute name="hr"
                           type="INT8U"
                           minValue="0"
                           maxValue="23"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.hr.desc"
                           presCond="M"/>
            <SubDataAttribute name="mn"
                           type="INT8U"
                           minValue="0"
                           maxValue="59"
                           descID="IEC61850_7_3.ConstructedDAs::CalendarTime.mn.desc"
                           presCond="M"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="AnalogueValue"
                            titleID="IEC61850_7_3.AnalogueValue::AnalogueValue.cl.title">
            <SubDataAttribute name="i"
                           type="INT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValue.i.desc"
                           presCond="AtLeastOne"
                           presCondArgs="1"/>
            <SubDataAttribute name="f"
                           type="FLOAT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValue.f.desc"
                           presCond="AtLeastOne"
                           presCondArgs="1"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="AnalogueValueCtl"
                            titleID="IEC61850_7_3.AnalogueValue::AnalogueValueCtl.cl.title">
            <SubDataAttribute name="i"
                           type="INT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValueCtl.i.desc"
                           presCond="AllOnlyOneGroup"
                           presCondArgs="1"/>
            <SubDataAttribute name="f"
                           type="FLOAT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValueCtl.f.desc"
                           presCond="AllOnlyOneGroup"
                           presCondArgs="2"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="AnalogueValueCtlF"
                            titleID="IEC61850_7_3.AnalogueValue::AnalogueValueCtlF.cl.title">
            <SubDataAttribute name="f"
                           type="FLOAT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValueCtlF.f.desc"
                           presCond="M"/>
         </ConstructedAttribute>
         <ConstructedAttribute name="AnalogueValueCtlInt"
                            titleID="IEC61850_7_3.AnalogueValue::AnalogueValueCtlInt.cl.title">
            <SubDataAttribute name="i"
                           type="INT32"
                           descID="IEC61850_7_3.AnalogueValue::AnalogueValueCtlInt.i.desc"
                           presCond="M"/>
         </ConstructedAttribute>
      </ConstructedAttributes>
   <CDCs>
         <CDC name="SPS" titleID="IEC61850_7_3.CDCStatusInfo::SPS.cl.title">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::SPS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::SPS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::SPS.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCStatusInfo::SPS.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="DPS" titleID="IEC61850_7_3.CDCStatusInfo::DPS.cl.title">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="Dbpos"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::DPS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::DPS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::DPS.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="Dbpos"
                        descID="IEC61850_7_3.CDCStatusInfo::DPS.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="INS"
           titleID="IEC61850_7_3.CDCStatusInfo::INS.cl.title"
           statistics="true">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="INT32"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCStatusInfo::INS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::INS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::INS.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="INT32"
                        descID="IEC61850_7_3.CDCStatusInfo::INS.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::INS.units.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ENS"
           titleID="IEC61850_7_3.CDCStatusInfo::ENS.cl.title"
           enumParameterized="true">
            <DataAttribute name="stVal"
                        fc="ST"
                        typeKind="ENUMERATED"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ENS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ENS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ENS.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCStatusInfo::ENS.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ACT" titleID="IEC61850_7_3.CDCStatusInfo::ACT.cl.title">
            <DataAttribute name="general"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.general.desc"
                        presCond="M"/>
            <DataAttribute name="phsA"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.phsA.desc"
                        presCond="O"/>
            <DataAttribute name="phsB"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.phsB.desc"
                        presCond="O"/>
            <DataAttribute name="phsC"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.phsC.desc"
                        presCond="O"/>
            <DataAttribute name="neut"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.neut.desc"
                        presCond="O"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.t.desc"
                        presCond="M"/>
            <DataAttribute name="originSrc"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.originSrc.desc"
                        presCond="O"/>
            <DataAttribute name="operTmPhsA"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.operTmPhsA.desc"
                        presCond="O"/>
            <DataAttribute name="operTmPhsB"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.operTmPhsB.desc"
                        presCond="O"/>
            <DataAttribute name="operTmPhsC"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ACT.operTmPhsC.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ACD" titleID="IEC61850_7_3.CDCStatusInfo::ACD.cl.title">
            <DataAttribute name="general"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.general.desc"
                        presCond="M"/>
            <DataAttribute name="dirGeneral"
                        fc="ST"
                        type="FaultDirectionKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.dirGeneral.desc"
                        presCond="M"/>
            <DataAttribute name="phsA"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.phsA.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="dirPhsA"
                        fc="ST"
                        type="PhaseFaultDirectionKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.dirPhsA.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="phsB"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.phsB.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="2"/>
            <DataAttribute name="dirPhsB"
                        fc="ST"
                        type="PhaseFaultDirectionKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.dirPhsB.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="2"/>
            <DataAttribute name="phsC"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.phsC.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="3"/>
            <DataAttribute name="dirPhsC"
                        fc="ST"
                        type="PhaseFaultDirectionKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.dirPhsC.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="3"/>
            <DataAttribute name="neut"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.neut.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="4"/>
            <DataAttribute name="dirNeut"
                        fc="ST"
                        type="PhaseFaultDirectionKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.dirNeut.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="4"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ACD.t.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SEC" titleID="IEC61850_7_3.CDCStatusInfo::SEC.cl.title">
            <DataAttribute name="cnt"
                        fc="ST"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::SEC.cnt.desc"
                        presCond="M"/>
            <DataAttribute name="sev"
                        fc="ST"
                        type="SeverityKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCStatusInfo::SEC.sev.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::SEC.t.desc"
                        presCond="M"/>
            <DataAttribute name="addr"
                        fc="ST"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCStatusInfo::SEC.addr.desc"
                        presCond="O"/>
            <DataAttribute name="addInfo"
                        fc="ST"
                        type="VisString64"
                        descID="IEC61850_7_3.CDCStatusInfo::SEC.addInfo.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="BCR"
           titleID="IEC61850_7_3.CDCStatusInfo::BCR.cl.title"
           statistics="true">
            <DataAttribute name="actVal"
                        fc="ST"
                        type="INT64"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.actVal.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="2"/>
            <DataAttribute name="frVal"
                        fc="ST"
                        type="INT64"
                        dupd="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.frVal.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="1"/>
            <DataAttribute name="frTm"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.frTm.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.t.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="2"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.units.desc"
                        presCond="O"/>
            <DataAttribute name="pulsQty"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.pulsQty.desc"
                        presCond="M"/>
            <DataAttribute name="frEna"
                        fc="CF"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.frEna.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="1"/>
            <DataAttribute name="strTm"
                        fc="CF"
                        type="Timestamp"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.strTm.desc"
                        presCond="O"/>
            <DataAttribute name="frPd"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.frPd.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="1"/>
            <DataAttribute name="frRs"
                        fc="CF"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::BCR.frRs.desc"
                        presCond="AllAtLeastOneGroup"
                        presCondArgs="1"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="HST" titleID="IEC61850_7_3.CDCStatusInfo::HST.cl.title">
            <DataAttribute name="hstVal"
                        fc="ST"
                        type="INT32"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.hstVal.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.t.desc"
                        presCond="M"/>
            <DataAttribute name="numPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.numPts.desc"
                        presCond="M"/>
            <DataAttribute name="hstRangeC"
                        fc="CF"
                        type="Cell"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.hstRangeC.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="xUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.xUnits.desc"
                        presCond="M"/>
            <DataAttribute name="yUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.yUnits.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.units.desc"
                        presCond="O"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="xD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.xD.desc"
                        presCond="M"/>
            <DataAttribute name="xDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.xDU.desc"
                        presCond="O"/>
            <DataAttribute name="yD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.yD.desc"
                        presCond="O"/>
            <DataAttribute name="yDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCStatusInfo::HST.yDU.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="VSS" titleID="IEC61850_7_3.CDCStatusInfo::VSS.cl.title">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="VisString255"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::VSS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::VSS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::VSS.t.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ORS" titleID="IEC61850_7_3.CDCStatusInfo::ORS.cl.title">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="ObjRef"
                        dchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ORS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::ORS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::ORS.t.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="TCS" titleID="IEC61850_7_3.CDCStatusInfo::TCS.cl.title">
            <DataAttribute name="stVal"
                        fc="ST"
                        type="Timestamp"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCStatusInfo::TCS.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCStatusInfo::TCS.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCStatusInfo::TCS.t.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="MV"
           titleID="IEC61850_7_3.CDCAnalogueInfo::MV.cl.title"
           statistics="true">
            <DataAttribute name="instMag"
                        fc="MX"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.instMag.desc"
                        presCond="O"/>
            <DataAttribute name="mag"
                        fc="MX"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.mag.desc"
                        presCond="M"/>
            <DataAttribute name="range"
                        fc="MX"
                        type="RangeKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.range.desc"
                        presCond="O"/>
            <DataAttribute name="q"
                        fc="MX"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="MX"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subMag"
                        fc="SV"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.subMag.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.units.desc"
                        presCond="O"/>
            <DataAttribute name="db"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.db.desc"
                        presCond="O"/>
            <DataAttribute name="zeroDb"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.zeroDb.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="rangeC"
                        fc="CF"
                        type="RangeConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.rangeC.desc"
                        presCond="MO"
                        presCondArgs="range"/>
            <DataAttribute name="smpRate"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.smpRate.desc"
                        presCond="O"/>
            <DataAttribute name="dbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.dbRef.desc"
                        presCond="MO"
                        presCondArgs="db"/>
            <DataAttribute name="zeroDbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::MV.zeroDbRef.desc"
                        presCond="MO"
                        presCondArgs="zeroDb"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CMV"
           titleID="IEC61850_7_3.CDCAnalogueInfo::CMV.cl.title"
           statistics="true">
            <DataAttribute name="instCVal"
                        fc="MX"
                        type="Vector"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.instCVal.desc"
                        presCond="O"/>
            <DataAttribute name="cVal"
                        fc="MX"
                        type="Vector"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.cVal.desc"
                        presCond="M"/>
            <DataAttribute name="range"
                        fc="MX"
                        type="RangeKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.range.desc"
                        presCond="O"/>
            <DataAttribute name="rangeAng"
                        fc="MX"
                        type="RangeKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.rangeAng.desc"
                        presCond="O"/>
            <DataAttribute name="q"
                        fc="MX"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="MX"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.t.desc"
                        presCond="M"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subCVal"
                        fc="SV"
                        type="Vector"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.subCVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.units.desc"
                        presCond="O"/>
            <DataAttribute name="db"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.db.desc"
                        presCond="O"/>
            <DataAttribute name="dbAng"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.dbAng.desc"
                        presCond="O"/>
            <DataAttribute name="zeroDb"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.zeroDb.desc"
                        presCond="O"/>
            <DataAttribute name="rangeC"
                        fc="CF"
                        type="RangeConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.rangeC.desc"
                        presCond="MO"
                        presCondArgs="range"/>
            <DataAttribute name="rangeAngC"
                        fc="CF"
                        type="RangeConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.rangeAngC.desc"
                        presCond="MO"
                        presCondArgs="rangeAng"/>
            <DataAttribute name="magSVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.magSVC.desc"
                        presCond="MFscaledMagV"/>
            <DataAttribute name="angSVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.angSVC.desc"
                        presCond="MFscaledAngV"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="smpRate"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.smpRate.desc"
                        presCond="O"/>
            <DataAttribute name="dbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.dbRef.desc"
                        presCond="MO"
                        presCondArgs="db"/>
            <DataAttribute name="zeroDbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.zeroDbRef.desc"
                        presCond="MO"
                        presCondArgs="zeroDb"/>
            <DataAttribute name="dbAngRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::CMV.dbAngRef.desc"
                        presCond="MO"
                        presCondArgs="dbAng"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SAV"
           titleID="IEC61850_7_3.CDCAnalogueInfo::SAV.cl.title"
           statistics="true">
            <DataAttribute name="instMag"
                        fc="MX"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.instMag.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="MX"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="MX"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.t.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.units.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="min"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.min.desc"
                        presCond="O"/>
            <DataAttribute name="max"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SAV.max.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="WYE"
           titleID="IEC61850_7_3.CDCAnalogueInfo::WYE.cl.title"
           statistics="true">
            <SubDataObject name="phsA"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.phsA.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="phsB"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.phsB.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="phsC"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.phsC.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="neut"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.neut.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="net"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.net.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="res"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.res.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="phsToNeut"
                        fc="CF"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::WYE.phsToNeut.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="DEL"
           titleID="IEC61850_7_3.CDCAnalogueInfo::DEL.cl.title"
           statistics="true">
            <SubDataObject name="phsAB"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsAB.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="phsBC"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsBC.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <SubDataObject name="phsCA"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.phsCA.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::DEL.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SEQ"
           titleID="IEC61850_7_3.CDCAnalogueInfo::SEQ.cl.title"
           statistics="true">
            <SubDataObject name="c1"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SEQ.c1.desc"
                        presCond="M"/>
            <SubDataObject name="c2"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SEQ.c2.desc"
                        presCond="OMSynPh"/>
            <SubDataObject name="c3"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SEQ.c3.desc"
                        presCond="OMSynPh"/>
            <DataAttribute name="seqT"
                        fc="MX"
                        type="SequenceKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SEQ.seqT.desc"
                        presCond="M"/>
            <DataAttribute name="phsRef"
                        fc="CF"
                        type="PhaseReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::SEQ.phsRef.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="HMV"
           titleID="IEC61850_7_3.CDCAnalogueInfo::HMV.cl.title"
           statistics="true">
            <SubDataObject name="har"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HMV.har.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="numHar"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numHar.desc"
                        presCond="M"/>
            <DataAttribute name="numCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numCyc.desc"
                        presCond="M"/>
            <DataAttribute name="evalTm"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.evalTm.desc"
                        presCond="M"/>
            <DataAttribute name="smpRate"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.smpRate.desc"
                        presCond="O"/>
            <DataAttribute name="frequency"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.frequency.desc"
                        presCond="M"/>
            <DataAttribute name="hvRef"
                        fc="CF"
                        type="HvReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.hvRef.desc"
                        presCond="O"/>
            <DataAttribute name="rmsCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.rmsCyc.desc"
                        presCond="MOrms"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="HWYE"
           titleID="IEC61850_7_3.CDCAnalogueInfo::HWYE.cl.title"
           statistics="true">
            <SubDataObject name="phsAHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.phsAHar.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="phsBHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.phsBHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="phsCHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.phsCHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="neutHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.neutHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="netHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.netHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="resHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.resHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="numHar"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numHar.desc"
                        presCond="M"/>
            <DataAttribute name="numCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numCyc.desc"
                        presCond="M"/>
            <DataAttribute name="evalTm"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.evalTm.desc"
                        presCond="M"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HWYE.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="smpRate"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.smpRate.desc"
                        presCond="O"/>
            <DataAttribute name="frequency"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.frequency.desc"
                        presCond="M"/>
            <DataAttribute name="hvRef"
                        fc="CF"
                        type="HvReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.hvRef.desc"
                        presCond="O"/>
            <DataAttribute name="rmsCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.rmsCyc.desc"
                        presCond="MOrms"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="HDEL"
           titleID="IEC61850_7_3.CDCAnalogueInfo::HDEL.cl.title"
           statistics="true">
            <SubDataObject name="phsABHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HDEL.phsABHar.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="phsBCHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HDEL.phsBCHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <SubDataObject name="phsCAHar"
                        type="CMV"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HDEL.phsCAHar.desc"
                        presCond="O"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="numHar"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numHar.desc"
                        presCond="M"/>
            <DataAttribute name="numCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.numCyc.desc"
                        presCond="M"/>
            <DataAttribute name="evalTm"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.evalTm.desc"
                        presCond="M"/>
            <DataAttribute name="angRef"
                        fc="CF"
                        type="PhaseAngleReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HDEL.angRef.desc"
                        presCond="O"/>
            <DataAttribute name="smpRate"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.smpRate.desc"
                        presCond="O"/>
            <DataAttribute name="frequency"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.frequency.desc"
                        presCond="M"/>
            <DataAttribute name="hvRef"
                        fc="CF"
                        type="HvReferenceKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.hvRef.desc"
                        presCond="O"/>
            <DataAttribute name="rmsCyc"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.rmsCyc.desc"
                        presCond="MOrms"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCAnalogueInfo::HarmonicMeasurandCDC.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BaseComposedCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SPC" titleID="IEC61850_7_3.CDCControl::SPC.cl.title">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::SPC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::SPC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="stVal"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.stVal.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.q.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::SPC.t.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCControl::SPC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="pulseConfig"
                        fc="CF"
                        type="PulseConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.pulseConfig.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::SPC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="BOOLEAN"
                           descID="IEC61850_7_3.CDCControl::SPC.ctlVal.desc"/>
         </CDC>
         <CDC name="DPC" titleID="IEC61850_7_3.CDCControl::DPC.cl.title">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::DPC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::DPC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="stVal"
                        fc="ST"
                        type="Dbpos"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::DPC.t.desc"
                        presCond="M"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="Dbpos"
                        descID="IEC61850_7_3.CDCControl::DPC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="pulseConfig"
                        fc="CF"
                        type="PulseConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.pulseConfig.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::DPC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="BOOLEAN"
                           descID="IEC61850_7_3.CDCControl::DPC.ctlVal.desc"/>
         </CDC>
         <CDC name="INC"
           titleID="IEC61850_7_3.CDCControl::INC.cl.title"
           statistics="true">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::INC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::INC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="stVal"
                        fc="ST"
                        type="INT32"
                        dchg="true"
                        dupd="true"
                        descID="IEC61850_7_3.CDCControl::INC.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::INC.t.desc"
                        presCond="M"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="INT32"
                        descID="IEC61850_7_3.CDCControl::INC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::INC.units.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="INT32"
                           descID="IEC61850_7_3.CDCControl::INC.ctlVal.desc"/>
         </CDC>
         <CDC name="ENC"
           titleID="IEC61850_7_3.CDCControl::ENC.cl.title"
           enumParameterized="true">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::ENC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::ENC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="stVal"
                        fc="ST"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.stVal.desc"
                        presCond="M"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.q.desc"
                        presCond="M"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ENC.t.desc"
                        presCond="M"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCControl::ENC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ENC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           typeKind="ENUMERATED"
                           descID="IEC61850_7_3.CDCControl::ENC.ctlVal.desc"/>
         </CDC>
         <CDC name="BSC"
           titleID="IEC61850_7_3.CDCControl::BSC.cl.title"
           statistics="true">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::BSC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::BSC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="valWTr"
                        fc="ST"
                        type="ValWithTrans"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.valWTr.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.q.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::BSC.t.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="ValWithTrans"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::BSC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="persistent"
                        fc="CF"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.persistent.desc"
                        presCond="M"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT8"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT8"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BSC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="Tcmd"
                           descID="IEC61850_7_3.CDCControl::BSC.ctlVal.desc"/>
         </CDC>
         <CDC name="ISC"
           titleID="IEC61850_7_3.CDCControl::ISC.cl.title"
           statistics="true">
            <DataAttribute name="origin"
                        fc="ST"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::ISC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="ST"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::ISC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="valWTr"
                        fc="ST"
                        type="ValWithTrans"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.valWTr.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="ST"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.q.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="t"
                        fc="ST"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ISC.t.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="stSeld"
                        fc="ST"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="ValWithTrans"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::ISC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT8"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT8"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ISC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="INT8"
                           descID="IEC61850_7_3.CDCControl::ISC.ctlVal.desc"/>
         </CDC>
         <CDC name="APC"
           titleID="IEC61850_7_3.CDCControl::APC.cl.title"
           statistics="true">
            <DataAttribute name="origin"
                        fc="MX"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::APC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="MX"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::APC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="mxVal"
                        fc="MX"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.mxVal.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="MX"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.q.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="t"
                        fc="MX"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::APC.t.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="stSeld"
                        fc="MX"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::APC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.units.desc"
                        presCond="O"/>
            <DataAttribute name="db"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.db.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="dbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::APC.dbRef.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="AnalogueValueCtl"
                           typeKind="CONSTRUCTED"
                           descID="IEC61850_7_3.CDCControl::APC.ctlVal.desc"/>
         </CDC>
         <CDC name="BAC"
           titleID="IEC61850_7_3.CDCControl::BAC.cl.title"
           statistics="true">
            <DataAttribute name="origin"
                        fc="MX"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::BAC.origin.desc"
                        presCond="O"/>
            <DataAttribute name="ctlNum"
                        fc="MX"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCControl::BAC.ctlNum.desc"
                        presCond="O"/>
            <DataAttribute name="mxVal"
                        fc="MX"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.mxVal.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="q"
                        fc="MX"
                        type="Quality"
                        qchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.q.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="t"
                        fc="MX"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::BAC.t.desc"
                        presCond="MAllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="stSeld"
                        fc="MX"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.stSeld.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="opRcvd"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opRcvd.desc"
                        presCond="O"/>
            <DataAttribute name="opOk"
                        fc="OR"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.opOk.desc"
                        presCond="O"/>
            <DataAttribute name="tOpOk"
                        fc="OR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCControl::ControlTestingCDC.tOpOk.desc"
                        presCond="O"/>
            <DataAttribute name="subEna"
                        fc="SV"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subEna.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subVal"
                        fc="SV"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCControl::BAC.subVal.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subQ"
                        fc="SV"
                        type="Quality"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subQ.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="subID"
                        fc="SV"
                        type="VisString64"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.subID.desc"
                        presCond="MFsubst"/>
            <DataAttribute name="blkEna"
                        fc="BL"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CoreAbstractCDCs::SubstitutionCDC.blkEna.desc"
                        presCond="O"/>
            <DataAttribute name="persistent"
                        fc="CF"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.persistent.desc"
                        presCond="M"/>
            <DataAttribute name="ctlModel"
                        fc="CF"
                        type="CtlModelKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.ctlModel.desc"
                        presCond="M"/>
            <DataAttribute name="sboTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.sboTimeout.desc"
                        presCond="MOsbo"/>
            <DataAttribute name="sboClass"
                        fc="CF"
                        type="SboClassKind"
                        typeKind="ENUMERATED"
                        defaultValue="operate-once"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.sboClass.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.units.desc"
                        presCond="O"/>
            <DataAttribute name="db"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.db.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="operTimeout"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.operTimeout.desc"
                        presCond="MOenhanced"/>
            <DataAttribute name="dbRef"
                        fc="CF"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCControl::BAC.dbRef.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
            <ServiceParameter name="ctlVal"
                           type="Tcmd"
                           descID="IEC61850_7_3.CDCControl::BAC.ctlVal.desc"/>
         </CDC>
         <CDC name="SPG" variant="SP" titleID="IEC61850_7_3.SPG::SPG_SP.cl.title">
            <DataAttribute name="setVal"
                        fc="SP"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.SPG::SPG_SP.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SPG" variant="SG" titleID="IEC61850_7_3.SPG::SPG_SG.cl.title">
            <DataAttribute name="setVal"
                        fc="SG"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.SPG::SPG_SG.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="SPG" variant="SE" titleID="IEC61850_7_3.SPG::SPG_SE.cl.title">
            <DataAttribute name="setVal"
                        fc="SE"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.SPG::SPG_SE.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ING" variant="SP" titleID="IEC61850_7_3.ING::ING_SP.cl.title">
            <DataAttribute name="setVal"
                        fc="SP"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING_SP.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.units.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ING" variant="SG" titleID="IEC61850_7_3.ING::ING_SG.cl.title">
            <DataAttribute name="setVal"
                        fc="SG"
                        type="INT32"
                        descID="IEC61850_7_3.ING::ING_SG.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.units.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ING" variant="SE" titleID="IEC61850_7_3.ING::ING_SE.cl.title">
            <DataAttribute name="setVal"
                        fc="SE"
                        type="INT32"
                        descID="IEC61850_7_3.ING::ING_SE.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="INT32U"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ING::ING.units.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ENG"
           variant="SP"
           titleID="IEC61850_7_3.ENG::ENG_SP.cl.title"
           enumParameterized="true">
            <DataAttribute name="setVal"
                        fc="SP"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.ENG::ENG_SP.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ENG"
           variant="SG"
           titleID="IEC61850_7_3.ENG::ENG_SG.cl.title"
           enumParameterized="true">
            <DataAttribute name="setVal"
                        fc="SG"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.ENG::ENG_SG.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ENG"
           variant="SE"
           titleID="IEC61850_7_3.ENG::ENG_SE.cl.title"
           enumParameterized="true">
            <DataAttribute name="setVal"
                        fc="SE"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.ENG::ENG_SE.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ORG" titleID="IEC61850_7_3.ORG::ORG.cl.title">
            <DataAttribute name="setSrcRef"
                        fc="SP"
                        type="ObjRef"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.setSrcRef.desc"
                        presCond="M"/>
            <DataAttribute name="setTstRef"
                        fc="SP"
                        type="ObjRef"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.setTstRef.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="setSrcCB"
                        fc="SP"
                        type="ObjRef"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.setSrcCB.desc"
                        presCond="O"/>
            <DataAttribute name="setTstCB"
                        fc="SP"
                        type="ObjRef"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.setTstCB.desc"
                        presCond="OF"
                        presCondArgs="setTstRef"/>
            <DataAttribute name="intAddr"
                        fc="SP"
                        type="VisString255"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.intAddr.desc"
                        presCond="O"/>
            <DataAttribute name="tstEna"
                        fc="SP"
                        type="BOOLEAN"
                        dchg="true"
                        descID="IEC61850_7_3.ORG::ORG.tstEna.desc"
                        presCond="AllOrNonePerGroup"
                        presCondArgs="1"/>
            <DataAttribute name="purpose"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.ORG::ORG.purpose.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="TSG" variant="SP" titleID="IEC61850_7_3.TSG::TSG_SP.cl.title">
            <DataAttribute name="setTm"
                        fc="SP"
                        type="Timestamp"
                        dchg="true"
                        descID="IEC61850_7_3.TSG::TSG_SP.setTm.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="setCal"
                        fc="SP"
                        type="CalendarTime"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.TSG::TSG_SP.setCal.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="TSG" variant="SG" titleID="IEC61850_7_3.TSG::TSG_SG.cl.title">
            <DataAttribute name="setTm"
                        fc="SG"
                        type="Timestamp"
                        descID="IEC61850_7_3.TSG::TSG_SG.setTm.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="setCal"
                        fc="SG"
                        type="CalendarTime"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.TSG::TSG_SG.setCal.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="TSG" variant="SE" titleID="IEC61850_7_3.TSG::TSG_SE.cl.title">
            <DataAttribute name="setTm"
                        fc="SE"
                        type="Timestamp"
                        descID="IEC61850_7_3.TSG::TSG_SE.setTm.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="setCal"
                        fc="SE"
                        type="CalendarTime"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.TSG::TSG_SE.setCal.desc"
                        presCond="AtLeastOne"
                        presCondArgs="1"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CUG" variant="SP" titleID="IEC61850_7_3.CUG::CUG_SP.cl.title">
            <DataAttribute name="cur"
                        fc="SP"
                        type="Currency"
                        dchg="true"
                        descID="IEC61850_7_3.CUG::CUG_SP.cur.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CUG" variant="SG" titleID="IEC61850_7_3.CUG::CUG_SG.cl.title">
            <DataAttribute name="cur"
                        fc="SG"
                        type="Currency"
                        descID="IEC61850_7_3.CUG::CUG_SG.cur.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CUG" variant="SE" titleID="IEC61850_7_3.CUG::CUG_SE.cl.title">
            <DataAttribute name="cur"
                        fc="SE"
                        type="Currency"
                        descID="IEC61850_7_3.CUG::CUG_SE.cur.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="VSG" variant="SP" titleID="IEC61850_7_3.VSG::VSG_SP.cl.title">
            <DataAttribute name="setVal"
                        fc="SP"
                        type="VisString255"
                        dchg="true"
                        descID="IEC61850_7_3.VSG::VSG_SP.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="VSG" variant="SG" titleID="IEC61850_7_3.VSG::VSG_SG.cl.title">
            <DataAttribute name="setVal"
                        fc="SG"
                        type="VisString255"
                        descID="IEC61850_7_3.VSG::VSG_SG.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="VSG" variant="SE" titleID="IEC61850_7_3.VSG::VSG_SE.cl.title">
            <DataAttribute name="setVal"
                        fc="SE"
                        type="VisString255"
                        descID="IEC61850_7_3.VSG::VSG_SE.setVal.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ASG" variant="SP" titleID="IEC61850_7_3.ASG::ASG_SP.cl.title">
            <DataAttribute name="setMag"
                        fc="SP"
                        type="AnalogueValueCtl"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG_SP.setMag.desc"
                        presCond="M"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.units.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ASG" variant="SG" titleID="IEC61850_7_3.ASG::ASG_SG.cl.title">
            <DataAttribute name="setMag"
                        fc="SG"
                        type="AnalogueValueCtl"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.ASG::ASG_SG.setMag.desc"
                        presCond="M"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.units.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="ASG" variant="SE" titleID="IEC61850_7_3.ASG::ASG_SE.cl.title">
            <DataAttribute name="setMag"
                        fc="SE"
                        type="AnalogueValueCtl"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.ASG::ASG_SE.setMag.desc"
                        presCond="M"/>
            <DataAttribute name="units"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.units.desc"
                        presCond="O"/>
            <DataAttribute name="sVC"
                        fc="CF"
                        type="ScaledValueConfig"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.sVC.desc"
                        presCond="MFscaledAV"/>
            <DataAttribute name="minVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.minVal.desc"
                        presCond="O"/>
            <DataAttribute name="maxVal"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.maxVal.desc"
                        presCond="O"/>
            <DataAttribute name="stepSize"
                        fc="CF"
                        type="AnalogueValue"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.ASG::ASG.stepSize.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CURVE"
           variant="SP"
           titleID="IEC61850_7_3.CURVE::CURVE_SP.cl.title">
            <DataAttribute name="setCharact"
                        fc="SP"
                        type="CurveCharKind"
                        typeKind="ENUMERATED"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setCharact.desc"
                        presCond="M"/>
            <DataAttribute name="setParA"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParA.desc"
                        presCond="O"/>
            <DataAttribute name="setParB"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParB.desc"
                        presCond="O"/>
            <DataAttribute name="setParC"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParC.desc"
                        presCond="O"/>
            <DataAttribute name="setParD"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParD.desc"
                        presCond="O"/>
            <DataAttribute name="setParE"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParE.desc"
                        presCond="O"/>
            <DataAttribute name="setParF"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CURVE::CURVE_SP.setParF.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CURVE"
           variant="SG"
           titleID="IEC61850_7_3.CURVE::CURVE_SG.cl.title">
            <DataAttribute name="setCharact"
                        fc="SG"
                        type="CurveCharKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setCharact.desc"
                        presCond="M"/>
            <DataAttribute name="setParA"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParA.desc"
                        presCond="O"/>
            <DataAttribute name="setParB"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParB.desc"
                        presCond="O"/>
            <DataAttribute name="setParC"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParC.desc"
                        presCond="O"/>
            <DataAttribute name="setParD"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParD.desc"
                        presCond="O"/>
            <DataAttribute name="setParE"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParE.desc"
                        presCond="O"/>
            <DataAttribute name="setParF"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SG.setParF.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CURVE"
           variant="SE"
           titleID="IEC61850_7_3.CURVE::CURVE_SE.cl.title">
            <DataAttribute name="setCharact"
                        fc="SE"
                        type="CurveCharKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setCharact.desc"
                        presCond="M"/>
            <DataAttribute name="setParA"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParA.desc"
                        presCond="O"/>
            <DataAttribute name="setParB"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParB.desc"
                        presCond="O"/>
            <DataAttribute name="setParC"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParC.desc"
                        presCond="O"/>
            <DataAttribute name="setParD"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParD.desc"
                        presCond="O"/>
            <DataAttribute name="setParE"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParE.desc"
                        presCond="O"/>
            <DataAttribute name="setParF"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CURVE::CURVE_SE.setParF.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CSG" variant="SP" titleID="IEC61850_7_3.CSG::CSG_SP.cl.title">
            <DataAttribute name="pointZ"
                        fc="SP"
                        type="FLOAT32"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG_SP.pointZ.desc"
                        presCond="O"/>
            <DataAttribute name="numPts"
                        fc="SP"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG_SP.numPts.desc"
                        presCond="M"/>
            <DataAttribute name="crvPts"
                        fc="SP"
                        type="Point"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG_SP.crvPts.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="xUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.xUnits.desc"
                        presCond="M"/>
            <DataAttribute name="yUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.yUnits.desc"
                        presCond="M"/>
            <DataAttribute name="zUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.zUnits.desc"
                        presCond="O"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="xD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.xD.desc"
                        presCond="M"/>
            <DataAttribute name="xDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.xDU.desc"
                        presCond="O"/>
            <DataAttribute name="yD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.yD.desc"
                        presCond="M"/>
            <DataAttribute name="yDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.yDU.desc"
                        presCond="O"/>
            <DataAttribute name="zD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.zD.desc"
                        presCond="O"/>
            <DataAttribute name="zDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.zDU.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CSG" variant="SG" titleID="IEC61850_7_3.CSG::CSG_SG.cl.title">
            <DataAttribute name="pointZ"
                        fc="SG"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CSG::CSG_SG.pointZ.desc"
                        presCond="O"/>
            <DataAttribute name="numPts"
                        fc="SG"
                        type="INT16U"
                        descID="IEC61850_7_3.CSG::CSG_SG.numPts.desc"
                        presCond="M"/>
            <DataAttribute name="crvPts"
                        fc="SG"
                        type="Point"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CSG::CSG_SG.crvPts.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="xUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.xUnits.desc"
                        presCond="M"/>
            <DataAttribute name="yUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.yUnits.desc"
                        presCond="M"/>
            <DataAttribute name="zUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.zUnits.desc"
                        presCond="O"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="xD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.xD.desc"
                        presCond="M"/>
            <DataAttribute name="xDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.xDU.desc"
                        presCond="O"/>
            <DataAttribute name="yD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.yD.desc"
                        presCond="M"/>
            <DataAttribute name="yDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.yDU.desc"
                        presCond="O"/>
            <DataAttribute name="zD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.zD.desc"
                        presCond="O"/>
            <DataAttribute name="zDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.zDU.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CSG" variant="SE" titleID="IEC61850_7_3.CSG::CSG_SE.cl.title">
            <DataAttribute name="pointZ"
                        fc="SE"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CSG::CSG_SE.pointZ.desc"
                        presCond="O"/>
            <DataAttribute name="numPts"
                        fc="SE"
                        type="INT16U"
                        descID="IEC61850_7_3.CSG::CSG_SE.numPts.desc"
                        presCond="M"/>
            <DataAttribute name="crvPts"
                        fc="SE"
                        type="Point"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CSG::CSG_SE.crvPts.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="xUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.xUnits.desc"
                        presCond="M"/>
            <DataAttribute name="yUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.yUnits.desc"
                        presCond="M"/>
            <DataAttribute name="zUnits"
                        fc="CF"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.zUnits.desc"
                        presCond="O"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CSG::CSG.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="xD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.xD.desc"
                        presCond="M"/>
            <DataAttribute name="xDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.xDU.desc"
                        presCond="O"/>
            <DataAttribute name="yD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.yD.desc"
                        presCond="M"/>
            <DataAttribute name="yDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.yDU.desc"
                        presCond="O"/>
            <DataAttribute name="zD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CSG::CSG.zD.desc"
                        presCond="O"/>
            <DataAttribute name="zDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CSG::CSG.zDU.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="DPL" titleID="IEC61850_7_3.CDCDescription::DPL.cl.title">
            <DataAttribute name="vendor"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.vendor.desc"
                        presCond="M"/>
            <DataAttribute name="hwRev"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.hwRev.desc"
                        presCond="O"/>
            <DataAttribute name="swRev"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.swRev.desc"
                        presCond="O"/>
            <DataAttribute name="serNum"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.serNum.desc"
                        presCond="O"/>
            <DataAttribute name="model"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.model.desc"
                        presCond="O"/>
            <DataAttribute name="location"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.location.desc"
                        presCond="O"/>
            <DataAttribute name="name"
                        fc="DC"
                        type="VisString64"
                        descID="IEC61850_7_3.CDCDescription::DPL.name.desc"
                        presCond="O"/>
            <DataAttribute name="owner"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.owner.desc"
                        presCond="O"/>
            <DataAttribute name="ePSName"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.ePSName.desc"
                        presCond="O"/>
            <DataAttribute name="primeOper"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.primeOper.desc"
                        presCond="O"/>
            <DataAttribute name="secondOper"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.secondOper.desc"
                        presCond="O"/>
            <DataAttribute name="latitude"
                        fc="DC"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CDCDescription::DPL.latitude.desc"
                        presCond="O"/>
            <DataAttribute name="longitude"
                        fc="DC"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CDCDescription::DPL.longitude.desc"
                        presCond="O"/>
            <DataAttribute name="altitude"
                        fc="DC"
                        type="FLOAT32"
                        descID="IEC61850_7_3.CDCDescription::DPL.altitude.desc"
                        presCond="O"/>
            <DataAttribute name="mRID"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::DPL.mRID.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="LPL" titleID="IEC61850_7_3.CDCDescription::LPL.cl.title">
            <DataAttribute name="paramRev"
                        fc="ST"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCDescription::LPL.paramRev.desc"
                        presCond="O"/>
            <DataAttribute name="valRev"
                        fc="ST"
                        type="INT32"
                        dchg="true"
                        descID="IEC61850_7_3.CDCDescription::LPL.valRev.desc"
                        presCond="O"/>
            <DataAttribute name="vendor"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::LPL.vendor.desc"
                        presCond="M"/>
            <DataAttribute name="swRev"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::LPL.swRev.desc"
                        presCond="M"/>
            <DataAttribute name="ldNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::LPL.ldNs.desc"
                        presCond="MFln0"/>
            <DataAttribute name="lnNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::LPL.lnNs.desc"
                        presCond="MOlnNs"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="configRev"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::LPL.configRev.desc"
                        presCond="MOln0"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CSD" titleID="IEC61850_7_3.CDCDescription::CSD.cl.title">
            <DataAttribute name="xUnits"
                        fc="DC"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCDescription::CSD.xUnits.desc"
                        presCond="M"/>
            <DataAttribute name="xD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::CSD.xD.desc"
                        presCond="M"/>
            <DataAttribute name="xDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCDescription::CSD.xDU.desc"
                        presCond="O"/>
            <DataAttribute name="yUnits"
                        fc="DC"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCDescription::CSD.yUnits.desc"
                        presCond="M"/>
            <DataAttribute name="yD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::CSD.yD.desc"
                        presCond="M"/>
            <DataAttribute name="yDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCDescription::CSD.yDU.desc"
                        presCond="O"/>
            <DataAttribute name="zUnits"
                        fc="DC"
                        type="Unit"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCDescription::CSD.zUnits.desc"
                        presCond="O"/>
            <DataAttribute name="zD"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::CSD.zD.desc"
                        presCond="O"/>
            <DataAttribute name="zDU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCDescription::CSD.zDU.desc"
                        presCond="O"/>
            <DataAttribute name="numPts"
                        fc="DC"
                        type="INT16U"
                        descID="IEC61850_7_3.CDCDescription::CSD.numPts.desc"
                        presCond="M"/>
            <DataAttribute name="crvPts"
                        fc="DC"
                        type="Point"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCDescription::CSD.crvPts.desc"
                        presCond="M"
                        isArray="true"
                        sizeAttribute="maxPts"/>
            <DataAttribute name="maxPts"
                        fc="CF"
                        type="INT16U"
                        dchg="true"
                        descID="IEC61850_7_3.CDCDescription::CSD.maxPts.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="VSD" titleID="IEC61850_7_3.CDCDescription::VSD.cl.title">
            <DataAttribute name="val"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CDCDescription::VSD.val.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CST" titleID="IEC61850_7_3.CDCServiceTracking::CST.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::CST.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="BTS" titleID="IEC61850_7_3.CDCServiceTracking::BTS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="rptID"
                        fc="SR"
                        type="VisString129"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.rptID.desc"
                        presCond="M"/>
            <DataAttribute name="rptEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.rptEna.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="confRev"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.confRev.desc"
                        presCond="M"/>
            <DataAttribute name="optFlds"
                        fc="SR"
                        type="OptFlds"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.optFlds.desc"
                        presCond="M"/>
            <DataAttribute name="bufTm"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.bufTm.desc"
                        presCond="M"/>
            <DataAttribute name="sqNum"
                        fc="SR"
                        type="INT16U"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.sqNum.desc"
                        presCond="M"/>
            <DataAttribute name="trgOps"
                        fc="SR"
                        type="TrgOps"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.trgOps.desc"
                        presCond="M"/>
            <DataAttribute name="intgPd"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.intgPd.desc"
                        presCond="M"/>
            <DataAttribute name="gi"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.gi.desc"
                        presCond="M"/>
            <DataAttribute name="purgeBuf"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.purgeBuf.desc"
                        presCond="M"/>
            <DataAttribute name="entryID"
                        fc="SR"
                        type="EntryID"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.entryID.desc"
                        presCond="M"/>
            <DataAttribute name="timeOfEntry"
                        fc="SR"
                        type="EntryTime"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.timeOfEntry.desc"
                        presCond="M"/>
            <DataAttribute name="resvTms"
                        fc="SR"
                        type="INT16"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.resvTms.desc"
                        presCond="O"/>
            <DataAttribute name="owner"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::BTS.owner.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="UTS" titleID="IEC61850_7_3.CDCServiceTracking::UTS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="rptID"
                        fc="SR"
                        type="VisString129"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.rptID.desc"
                        presCond="M"/>
            <DataAttribute name="rptEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.rptEna.desc"
                        presCond="M"/>
            <DataAttribute name="resv"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.resv.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="confRev"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.confRev.desc"
                        presCond="M"/>
            <DataAttribute name="optFlds"
                        fc="SR"
                        type="OptFlds"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.optFlds.desc"
                        presCond="M"/>
            <DataAttribute name="bufTm"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.bufTm.desc"
                        presCond="M"/>
            <DataAttribute name="sqNum"
                        fc="SR"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.sqNum.desc"
                        presCond="M"/>
            <DataAttribute name="trgOps"
                        fc="SR"
                        type="TrgOps"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.trgOps.desc"
                        presCond="M"/>
            <DataAttribute name="intgPd"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.intgPd.desc"
                        presCond="M"/>
            <DataAttribute name="gi"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.gi.desc"
                        presCond="M"/>
            <DataAttribute name="owner"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::UTS.owner.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="LTS" titleID="IEC61850_7_3.CDCServiceTracking::LTS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="logEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.logEna.desc"
                        presCond="M"/>
            <DataAttribute name="logRef"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.logRef.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="oldEntrTm"
                        fc="SR"
                        type="EntryTime"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.oldEntrTm.desc"
                        presCond="M"/>
            <DataAttribute name="newEntrTm"
                        fc="SR"
                        type="EntryTime"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.newEntrTm.desc"
                        presCond="M"/>
            <DataAttribute name="oldEnt"
                        fc="SR"
                        type="EntryID"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.oldEnt.desc"
                        presCond="M"/>
            <DataAttribute name="newEnt"
                        fc="SR"
                        type="EntryID"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.newEnt.desc"
                        presCond="M"/>
            <DataAttribute name="trgOps"
                        fc="SR"
                        type="TrgOps"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.trgOps.desc"
                        presCond="M"/>
            <DataAttribute name="intgPd"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::LTS.intgPd.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="GTS" titleID="IEC61850_7_3.CDCServiceTracking::GTS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="goEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.goEna.desc"
                        presCond="M"/>
            <DataAttribute name="goID"
                        fc="SR"
                        type="VisString129"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.goID.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="confRev"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.confRev.desc"
                        presCond="M"/>
            <DataAttribute name="ndsCom"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.ndsCom.desc"
                        presCond="M"/>
            <DataAttribute name="dstAddress"
                        fc="SR"
                        type="PhyComAddr"
                        descID="IEC61850_7_3.CDCServiceTracking::GTS.dstAddress.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="MTS" titleID="IEC61850_7_3.CDCServiceTracking::MTS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="svEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.svEna.desc"
                        presCond="M"/>
            <DataAttribute name="msvID"
                        fc="SR"
                        type="VisString129"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.msvID.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="confRev"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.confRev.desc"
                        presCond="M"/>
            <DataAttribute name="smpRate"
                        fc="SR"
                        type="INT16U"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.smpRate.desc"
                        presCond="M"/>
            <DataAttribute name="optFlds"
                        fc="SR"
                        type="SvOptFlds"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.optFlds.desc"
                        presCond="M"/>
            <DataAttribute name="smpMod"
                        fc="SR"
                        type="SamplingModeKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.smpMod.desc"
                        presCond="M"/>
            <DataAttribute name="dstAddress"
                        fc="SR"
                        type="PhyComAddr"
                        descID="IEC61850_7_3.CDCServiceTracking::MTS.dstAddress.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="NTS"
           titleID="IEC61850_7_3.CDCServiceTracking::NTS.cl.title"
           deprecated="true">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="svEna"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.svEna.desc"
                        presCond="M"/>
            <DataAttribute name="resv"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.resv.desc"
                        presCond="M"/>
            <DataAttribute name="usvID"
                        fc="SR"
                        type="VisString129"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.usvID.desc"
                        presCond="M"/>
            <DataAttribute name="datSet"
                        fc="SR"
                        type="ObjRef"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.datSet.desc"
                        presCond="M"/>
            <DataAttribute name="confRev"
                        fc="SR"
                        type="INT32U"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.confRev.desc"
                        presCond="M"/>
            <DataAttribute name="smpMod"
                        fc="SR"
                        type="SamplingModeKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.smpMod.desc"
                        presCond="M"/>
            <DataAttribute name="smpRate"
                        fc="SR"
                        type="INT16U"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.smpRate.desc"
                        presCond="M"/>
            <DataAttribute name="optFlds"
                        fc="SR"
                        type="SvOptFlds"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.optFlds.desc"
                        presCond="M"/>
            <DataAttribute name="dstAddress"
                        fc="SR"
                        type="PhyComAddr"
                        descID="IEC61850_7_3.CDCServiceTracking::NTS.dstAddress.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="STS" titleID="IEC61850_7_3.CDCServiceTracking::STS.cl.title">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer"
                        fc="SR"
                        type="Unicode255"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.certIssuer.desc"
                        presCond="O"/>
            <DataAttribute name="numOfSG"
                        fc="SR"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.numOfSG.desc"
                        presCond="M"/>
            <DataAttribute name="actSG"
                        fc="SR"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.actSG.desc"
                        presCond="M"/>
            <DataAttribute name="editSG"
                        fc="SR"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.editSG.desc"
                        presCond="M"/>
            <DataAttribute name="cnfEdit"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.cnfEdit.desc"
                        presCond="M"/>
            <DataAttribute name="lActTm"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.lActTm.desc"
                        presCond="M"/>
            <DataAttribute name="resvTms"
                        fc="SR"
                        type="INT16U"
                        descID="IEC61850_7_3.CDCServiceTracking::STS.resvTms.desc"
                        presCond="O"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
         <CDC name="CTS"
           titleID="IEC61850_7_3.CDCServiceTracking::CTS.cl.title"
           typeKindParameterized="true">
            <DataAttribute name="objRef"
                        fc="SR"
                        type="ObjRef"
                        dupd="true"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.objRef.desc"
                        presCond="M"/>
            <DataAttribute name="serviceType"
                        fc="SR"
                        type="ServiceNameKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.serviceType.desc"
                        presCond="M"/>
            <DataAttribute name="errorCode"
                        fc="SR"
                        type="ServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.errorCode.desc"
                        presCond="M"/>
            <DataAttribute name="originatorID"
                        fc="SR"
                        type="Octet64"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.originatorID.desc"
                        presCond="O"/>
            <DataAttribute name="t"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.t.desc"
                        presCond="M"/>
            <DataAttribute name="certIssuer" fc="SR" type="Unicode255" presCond="O"/>
            <DataAttribute name="ctlVal"
                        fc="SR"
                        typeKind="undefined"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.ctlVal.desc"
                        presCond="M"/>
            <DataAttribute name="operTm"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.operTm.desc"
                        presCond="MOoperTm"/>
            <DataAttribute name="origin"
                        fc="SR"
                        type="Originator"
                        typeKind="CONSTRUCTED"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.origin.desc"
                        presCond="M"/>
            <DataAttribute name="ctlNum"
                        fc="SR"
                        type="INT8U"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.ctlNum.desc"
                        presCond="M"/>
            <DataAttribute name="T"
                        fc="SR"
                        type="Timestamp"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.T.desc"
                        presCond="M"/>
            <DataAttribute name="Test"
                        fc="SR"
                        type="BOOLEAN"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.Test.desc"
                        presCond="M"/>
            <DataAttribute name="Check"
                        fc="SR"
                        type="Check"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.Check.desc"
                        presCond="M"/>
            <DataAttribute name="respAddCause"
                        fc="SR"
                        type="ControlServiceStatusKind"
                        typeKind="ENUMERATED"
                        descID="IEC61850_7_3.CDCServiceTracking::CTS.respAddCause.desc"
                        presCond="M"/>
            <DataAttribute name="d"
                        fc="DC"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.d.desc"
                        presCond="O"/>
            <DataAttribute name="dU"
                        fc="DC"
                        type="Unicode255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dU.desc"
                        presCond="O"/>
            <DataAttribute name="cdcName"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.cdcName.desc"
                        presCond="O"/>
            <DataAttribute name="dataNs"
                        fc="EX"
                        type="VisString255"
                        descID="IEC61850_7_3.CoreAbstractCDCs::BasePrimitiveCDC.dataNs.desc"
                        presCond="MOdataNs"/>
         </CDC>
      </CDCs>
</NS>
  `,
    `<?xml version="1.0" encoding="UTF-8"?>
<NS xmlns="http://www.iec.ch/61850/2016/NSD"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.iec.ch/61850/2016/NSD NSD.xsd"
    id="IEC 61850-7-4"
    version="2007"
    revision="B"
    release="3"
    umlVersion="WG10UML02v20draft25"
    umlDate="2019-10-31T00:00:00Z"
    publicationStage="IS">
   <Copyright>
         <Notice>
			COPYRIGHT (c) IEC, www.iec.ch/tc57/supportdocuments. This version of this NSD is part of IEC_61850-7-4:2007; see the IEC_61850-7-4:2007 for full legal notices. In case of any differences between the here-below code and the IEC published content, the here-below definition supersedes the IEC publication; it may contain updates. See history files. The whole document has to be taken into account to have a full description of this code component.
			See www.iec.ch/CCv1 for copyright details.
			</Notice>
         <License uri="www.iec.ch/CCv1" kind="Standard"/>
      </Copyright>
   <Changes version=""
            revision=""
            tissues="671, 672, 674, 675, 676, 677, 679, 680, 682, 683, 685, 686, 689, 693, 694, 695, 696, 712, 713, 714, 715, 716, 724, 725, 732, 734, 735, 736, 742, 743, 744, 748, 749, 772, 773, 774, 775, 776, 800, 802, 808, 819, 830, 831, 835, 838, 842, 843, 844, 849, 871, 877, 878, 879, 881, 882, 902, 908, 909, 910, 911, 912, 913, 920, 928, 932, 933, 937, 939, 940, 952, 967, 991, 1007, 1029, 1044, 1046, 1071, 1075, 1076, 1077, 1081, 1086, 1117, 1119, 1128, 1137, 1139, 1176, 1177, 1190, 1191, 1203, 1205, 1229, 1235, 1236, 1244, 1250, 1256, 1258, 1259, 1261, 1269, 1273, 1278, 1282, 1292, 1294, 1310, 1316, 1330, 1331, 1333, 1339, 1347, 1348, 1364, 1368, 1375, 1380, 1390, 1404, 1411, 1420, 1423, 1425, 1426, 1436, 1456, 1568"/>
   <Abbreviations>
         <Abbreviation name="A" descID="IEC61850_7_4.Abbreviations::AbbrTermA.A.desc"/>
         <Abbreviation name="AC" descID="IEC61850_7_4.Abbreviations::AbbrTermA.AC.desc"/>
         <Abbreviation name="AGC" descID="IEC61850_7_4.Abbreviations::AbbrTermA.AGC.desc"/>
         <Abbreviation name="ASG" descID="IEC61850_7_4.Abbreviations::AbbrTermA.ASG.desc"/>
         <Abbreviation name="AWatt" descID="IEC61850_7_4.Abbreviations::AbbrTermA.AWatt.desc"/>
         <Abbreviation name="Abr" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Abr.desc"/>
         <Abbreviation name="Abs" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Abs.desc"/>
         <Abbreviation name="Absb" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Absb.desc"/>
         <Abbreviation name="Acc" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Acc.desc"/>
         <Abbreviation name="Accl" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Accl.desc"/>
         <Abbreviation name="Accm" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Accm.desc"/>
         <Abbreviation name="Ack" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ack.desc"/>
         <Abbreviation name="Acs" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Acs.desc"/>
         <Abbreviation name="Act" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Act.desc"/>
         <Abbreviation name="Actr" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Actr.desc"/>
         <Abbreviation name="Acu" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Acu.desc"/>
         <Abbreviation name="Addr" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Addr.desc"/>
         <Abbreviation name="Adj" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Adj.desc"/>
         <Abbreviation name="Admin" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Admin.desc"/>
         <Abbreviation name="Adp" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Adp.desc"/>
         <Abbreviation name="Aff" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Aff.desc"/>
         <Abbreviation name="Age" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Age.desc"/>
         <Abbreviation name="Ahr" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ahr.desc"/>
         <Abbreviation name="Air" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Air.desc"/>
         <Abbreviation name="Alg" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Alg.desc"/>
         <Abbreviation name="Alm" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Alm.desc"/>
         <Abbreviation name="Als" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Als.desc"/>
         <Abbreviation name="Alt" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Alt.desc"/>
         <Abbreviation name="Altn" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Altn.desc"/>
         <Abbreviation name="Amnt" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Amnt.desc"/>
         <Abbreviation name="Amp" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Amp.desc"/>
         <Abbreviation name="An" descID="IEC61850_7_4.Abbreviations::AbbrTermA.An.desc"/>
         <Abbreviation name="Anc" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Anc.desc"/>
         <Abbreviation name="Ane" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ane.desc"/>
         <Abbreviation name="Ang" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ang.desc"/>
         <Abbreviation name="Ap" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ap.desc"/>
         <Abbreviation name="Apc" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Apc.desc"/>
         <Abbreviation name="App" descID="IEC61850_7_4.Abbreviations::AbbrTermA.App.desc"/>
         <Abbreviation name="Ar" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ar.desc"/>
         <Abbreviation name="Arc" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Arc.desc"/>
         <Abbreviation name="Area" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Area.desc"/>
         <Abbreviation name="Arr" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Arr.desc"/>
         <Abbreviation name="Asyn" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Asyn.desc"/>
         <Abbreviation name="At" descID="IEC61850_7_4.Abbreviations::AbbrTermA.At.desc"/>
         <Abbreviation name="Auth" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Auth.desc"/>
         <Abbreviation name="Auto" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Auto.desc"/>
         <Abbreviation name="Aux" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Aux.desc"/>
         <Abbreviation name="Av" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Av.desc"/>
         <Abbreviation name="Avl" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Avl.desc"/>
         <Abbreviation name="Ax" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Ax.desc"/>
         <Abbreviation name="Azi" descID="IEC61850_7_4.Abbreviations::AbbrTermA.Azi.desc"/>
         <Abbreviation name="B" descID="IEC61850_7_4.Abbreviations::AbbrTermB.B.desc"/>
         <Abbreviation name="BG" descID="IEC61850_7_4.Abbreviations::AbbrTermB.BG.desc"/>
         <Abbreviation name="Bac" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bac.desc"/>
         <Abbreviation name="Bar" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bar.desc"/>
         <Abbreviation name="Base" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Base.desc"/>
         <Abbreviation name="Bat" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bat.desc"/>
         <Abbreviation name="Bck" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bck.desc"/>
         <Abbreviation name="Bec" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bec.desc"/>
         <Abbreviation name="Beh" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Beh.desc"/>
         <Abbreviation name="Ber" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Ber.desc"/>
         <Abbreviation name="Bias" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bias.desc"/>
         <Abbreviation name="Bl" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bl.desc"/>
         <Abbreviation name="Blb" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Blb.desc"/>
         <Abbreviation name="Blk" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Blk.desc"/>
         <Abbreviation name="Blow" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Blow.desc"/>
         <Abbreviation name="Bnd" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bnd.desc"/>
         <Abbreviation name="Boil" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Boil.desc"/>
         <Abbreviation name="Bot" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bot.desc"/>
         <Abbreviation name="Brcb" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Brcb.desc"/>
         <Abbreviation name="Brg" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Brg.desc"/>
         <Abbreviation name="Brk" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Brk.desc"/>
         <Abbreviation name="Bsc" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bsc.desc"/>
         <Abbreviation name="Bst" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bst.desc"/>
         <Abbreviation name="Bt" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bt.desc"/>
         <Abbreviation name="Bub" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bub.desc"/>
         <Abbreviation name="Bus" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Bus.desc"/>
         <Abbreviation name="Byp" descID="IEC61850_7_4.Abbreviations::AbbrTermB.Byp.desc"/>
         <Abbreviation name="C" descID="IEC61850_7_4.Abbreviations::AbbrTermC.C.desc"/>
         <Abbreviation name="C2H2" descID="IEC61850_7_4.Abbreviations::AbbrTermC.C2H2.desc"/>
         <Abbreviation name="C2H4" descID="IEC61850_7_4.Abbreviations::AbbrTermC.C2H4.desc"/>
         <Abbreviation name="C2H6" descID="IEC61850_7_4.Abbreviations::AbbrTermC.C2H6.desc"/>
         <Abbreviation name="CB" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CB.desc"/>
         <Abbreviation name="CE" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CE.desc"/>
         <Abbreviation name="CG" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CG.desc"/>
         <Abbreviation name="CH4" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CH4.desc"/>
         <Abbreviation name="CHP" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CHP.desc"/>
         <Abbreviation name="CO" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CO.desc"/>
         <Abbreviation name="CO2" descID="IEC61850_7_4.Abbreviations::AbbrTermC.CO2.desc"/>
         <Abbreviation name="Cab" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cab.desc"/>
         <Abbreviation name="Cal" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cal.desc"/>
         <Abbreviation name="Cam" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cam.desc"/>
         <Abbreviation name="Can" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Can.desc"/>
         <Abbreviation name="Cap" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cap.desc"/>
         <Abbreviation name="Capac" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Capac.desc"/>
         <Abbreviation name="Car" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Car.desc"/>
         <Abbreviation name="Cbr" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cbr.desc"/>
         <Abbreviation name="Ccw" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ccw.desc"/>
         <Abbreviation name="Ccy" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ccy.desc"/>
         <Abbreviation name="Cds" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cds.desc"/>
         <Abbreviation name="Ceil" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ceil.desc"/>
         <Abbreviation name="Cel" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cel.desc"/>
         <Abbreviation name="Cf" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cf.desc"/>
         <Abbreviation name="Cff" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cff.desc"/>
         <Abbreviation name="Cfg" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cfg.desc"/>
         <Abbreviation name="Cg" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cg.desc"/>
         <Abbreviation name="Ch" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ch.desc"/>
         <Abbreviation name="Cha" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cha.desc"/>
         <Abbreviation name="Chg" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Chg.desc"/>
         <Abbreviation name="Chk" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Chk.desc"/>
         <Abbreviation name="Chr" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Chr.desc"/>
         <Abbreviation name="Chs" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Chs.desc"/>
         <Abbreviation name="Circ" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Circ.desc"/>
         <Abbreviation name="Cl" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cl.desc"/>
         <Abbreviation name="Clc" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Clc.desc"/>
         <Abbreviation name="Clip" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Clip.desc"/>
         <Abbreviation name="Clk" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Clk.desc"/>
         <Abbreviation name="Cloud" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cloud.desc"/>
         <Abbreviation name="Clr" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Clr.desc"/>
         <Abbreviation name="Cls" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cls.desc"/>
         <Abbreviation name="Cm" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cm.desc"/>
         <Abbreviation name="Cmbu" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cmbu.desc"/>
         <Abbreviation name="Cmd" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cmd.desc"/>
         <Abbreviation name="Cmpl" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cmpl.desc"/>
         <Abbreviation name="Cmut" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cmut.desc"/>
         <Abbreviation name="Cndct" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cndct.desc"/>
         <Abbreviation name="Cnt" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cnt.desc"/>
         <Abbreviation name="Cntt" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cntt.desc"/>
         <Abbreviation name="Cnv" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cnv.desc"/>
         <Abbreviation name="Col" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Col.desc"/>
         <Abbreviation name="Comm" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Comm.desc"/>
         <Abbreviation name="Comp" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Comp.desc"/>
         <Abbreviation name="Conf" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Conf.desc"/>
         <Abbreviation name="ConfRev"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermC.ConfRev.desc"/>
         <Abbreviation name="Conn" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Conn.desc"/>
         <Abbreviation name="Cons" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cons.desc"/>
         <Abbreviation name="Cor" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cor.desc"/>
         <Abbreviation name="Core" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Core.desc"/>
         <Abbreviation name="Cost" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cost.desc"/>
         <Abbreviation name="Crank" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crank.desc"/>
         <Abbreviation name="Crd" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crd.desc"/>
         <Abbreviation name="Crit" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crit.desc"/>
         <Abbreviation name="Crl" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crl.desc"/>
         <Abbreviation name="Crp" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crp.desc"/>
         <Abbreviation name="Crv" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Crv.desc"/>
         <Abbreviation name="Csmp" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Csmp.desc"/>
         <Abbreviation name="Ctl" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ctl.desc"/>
         <Abbreviation name="Ctr" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Ctr.desc"/>
         <Abbreviation name="Cum" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cum.desc"/>
         <Abbreviation name="Cur" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cur.desc"/>
         <Abbreviation name="Cut" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cut.desc"/>
         <Abbreviation name="Cvr" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cvr.desc"/>
         <Abbreviation name="Cw" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cw.desc"/>
         <Abbreviation name="Cwb" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cwb.desc"/>
         <Abbreviation name="Cyc" descID="IEC61850_7_4.Abbreviations::AbbrTermC.Cyc.desc"/>
         <Abbreviation name="D" descID="IEC61850_7_4.Abbreviations::AbbrTermD.D.desc"/>
         <Abbreviation name="DC" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DC.desc"/>
         <Abbreviation name="DER" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DER.desc"/>
         <Abbreviation name="DExt" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DExt.desc"/>
         <Abbreviation name="DPCSO" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DPCSO.desc"/>
         <Abbreviation name="DQ0" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DQ0.desc"/>
         <Abbreviation name="DS" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DS.desc"/>
         <Abbreviation name="DT" descID="IEC61850_7_4.Abbreviations::AbbrTermD.DT.desc"/>
         <Abbreviation name="Dam" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dam.desc"/>
         <Abbreviation name="Damp" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Damp.desc"/>
         <Abbreviation name="Date" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Date.desc"/>
         <Abbreviation name="Day" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Day.desc"/>
         <Abbreviation name="Db" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Db.desc"/>
         <Abbreviation name="Dcl" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dcl.desc"/>
         <Abbreviation name="Dct" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dct.desc"/>
         <Abbreviation name="De" descID="IEC61850_7_4.Abbreviations::AbbrTermD.De.desc"/>
         <Abbreviation name="Dea" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dea.desc"/>
         <Abbreviation name="Dec" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dec.desc"/>
         <Abbreviation name="Deg" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Deg.desc"/>
         <Abbreviation name="Dehum" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dehum.desc"/>
         <Abbreviation name="Del" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Del.desc"/>
         <Abbreviation name="Den" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Den.desc"/>
         <Abbreviation name="Dep" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dep.desc"/>
         <Abbreviation name="Desc" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Desc.desc"/>
         <Abbreviation name="Det" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Det.desc"/>
         <Abbreviation name="Detun" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Detun.desc"/>
         <Abbreviation name="Dev" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dev.desc"/>
         <Abbreviation name="Dew" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dew.desc"/>
         <Abbreviation name="Dff" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dff.desc"/>
         <Abbreviation name="Dfl" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dfl.desc"/>
         <Abbreviation name="Dft" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dft.desc"/>
         <Abbreviation name="Dia" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dia.desc"/>
         <Abbreviation name="Diag" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Diag.desc"/>
         <Abbreviation name="Dif" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dif.desc"/>
         <Abbreviation name="Dig" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dig.desc"/>
         <Abbreviation name="Dip" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dip.desc"/>
         <Abbreviation name="Dir" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dir.desc"/>
         <Abbreviation name="Dis" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dis.desc"/>
         <Abbreviation name="Dist" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dist.desc"/>
         <Abbreviation name="Dith" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dith.desc"/>
         <Abbreviation name="Dl" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dl.desc"/>
         <Abbreviation name="Dlt" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dlt.desc"/>
         <Abbreviation name="Dlv" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dlv.desc"/>
         <Abbreviation name="Dmd" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dmd.desc"/>
         <Abbreviation name="Dn" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dn.desc"/>
         <Abbreviation name="Dpc" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dpc.desc"/>
         <Abbreviation name="Dpt" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dpt.desc"/>
         <Abbreviation name="Drag" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Drag.desc"/>
         <Abbreviation name="Dropout"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dropout.desc"/>
         <Abbreviation name="Drp" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Drp.desc"/>
         <Abbreviation name="Drt" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Drt.desc"/>
         <Abbreviation name="Drtb" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Drtb.desc"/>
         <Abbreviation name="Drv" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Drv.desc"/>
         <Abbreviation name="Dsa" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dsa.desc"/>
         <Abbreviation name="Dsc" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dsc.desc"/>
         <Abbreviation name="Dsch" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dsch.desc"/>
         <Abbreviation name="Dscon" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dscon.desc"/>
         <Abbreviation name="Dsp" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dsp.desc"/>
         <Abbreviation name="Dtc" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dtc.desc"/>
         <Abbreviation name="Dur" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dur.desc"/>
         <Abbreviation name="Dust" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dust.desc"/>
         <Abbreviation name="Dv" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dv.desc"/>
         <Abbreviation name="Dw" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dw.desc"/>
         <Abbreviation name="Dyn" descID="IEC61850_7_4.Abbreviations::AbbrTermD.Dyn.desc"/>
         <Abbreviation name="EE" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EE.desc"/>
         <Abbreviation name="EF" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EF.desc"/>
         <Abbreviation name="EFN" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EFN.desc"/>
         <Abbreviation name="EMA" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EMA.desc"/>
         <Abbreviation name="ENG" descID="IEC61850_7_4.Abbreviations::AbbrTermE.ENG.desc"/>
         <Abbreviation name="ENS" descID="IEC61850_7_4.Abbreviations::AbbrTermE.ENS.desc"/>
         <Abbreviation name="EPC" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EPC.desc"/>
         <Abbreviation name="EV" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EV.desc"/>
         <Abbreviation name="EVSE" descID="IEC61850_7_4.Abbreviations::AbbrTermE.EVSE.desc"/>
         <Abbreviation name="Echo" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Echo.desc"/>
         <Abbreviation name="Ecp" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ecp.desc"/>
         <Abbreviation name="Edt" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Edt.desc"/>
         <Abbreviation name="Efc" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Efc.desc"/>
         <Abbreviation name="El" descID="IEC61850_7_4.Abbreviations::AbbrTermE.El.desc"/>
         <Abbreviation name="Ela" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ela.desc"/>
         <Abbreviation name="Em" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Em.desc"/>
         <Abbreviation name="Emg" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Emg.desc"/>
         <Abbreviation name="En" descID="IEC61850_7_4.Abbreviations::AbbrTermE.En.desc"/>
         <Abbreviation name="Ena" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ena.desc"/>
         <Abbreviation name="Enc" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Enc.desc"/>
         <Abbreviation name="Encl" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Encl.desc"/>
         <Abbreviation name="End" descID="IEC61850_7_4.Abbreviations::AbbrTermE.End.desc"/>
         <Abbreviation name="Eng" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Eng.desc"/>
         <Abbreviation name="Ent" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ent.desc"/>
         <Abbreviation name="Entr" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Entr.desc"/>
         <Abbreviation name="Env" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Env.desc"/>
         <Abbreviation name="Eq" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Eq.desc"/>
         <Abbreviation name="Err" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Err.desc"/>
         <Abbreviation name="Est" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Est.desc"/>
         <Abbreviation name="Ev" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ev.desc"/>
         <Abbreviation name="Evn" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Evn.desc"/>
         <Abbreviation name="Evt" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Evt.desc"/>
         <Abbreviation name="Ex" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ex.desc"/>
         <Abbreviation name="ExIm" descID="IEC61850_7_4.Abbreviations::AbbrTermE.ExIm.desc"/>
         <Abbreviation name="Exc" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Exc.desc"/>
         <Abbreviation name="Excl" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Excl.desc"/>
         <Abbreviation name="Exp" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Exp.desc"/>
         <Abbreviation name="Exps" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Exps.desc"/>
         <Abbreviation name="Expt" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Expt.desc"/>
         <Abbreviation name="Ext" descID="IEC61850_7_4.Abbreviations::AbbrTermE.Ext.desc"/>
         <Abbreviation name="F" descID="IEC61850_7_4.Abbreviations::AbbrTermF.F.desc"/>
         <Abbreviation name="FA" descID="IEC61850_7_4.Abbreviations::AbbrTermF.FA.desc"/>
         <Abbreviation name="FPM" descID="IEC61850_7_4.Abbreviations::AbbrTermF.FPM.desc"/>
         <Abbreviation name="Fa" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fa.desc"/>
         <Abbreviation name="Fact" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fact.desc"/>
         <Abbreviation name="Fail" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fail.desc"/>
         <Abbreviation name="Fan" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fan.desc"/>
         <Abbreviation name="Fbc" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fbc.desc"/>
         <Abbreviation name="Fer" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fer.desc"/>
         <Abbreviation name="Fil" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fil.desc"/>
         <Abbreviation name="Fire" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fire.desc"/>
         <Abbreviation name="Fish" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fish.desc"/>
         <Abbreviation name="Fix" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fix.desc"/>
         <Abbreviation name="Fld" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fld.desc"/>
         <Abbreviation name="Flk" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flk.desc"/>
         <Abbreviation name="Fll" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fll.desc"/>
         <Abbreviation name="Flm" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flm.desc"/>
         <Abbreviation name="Flood" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flood.desc"/>
         <Abbreviation name="Flsh" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flsh.desc"/>
         <Abbreviation name="Flt" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flt.desc"/>
         <Abbreviation name="Flush" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flush.desc"/>
         <Abbreviation name="Flw" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Flw.desc"/>
         <Abbreviation name="Fol" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fol.desc"/>
         <Abbreviation name="Forc" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Forc.desc"/>
         <Abbreviation name="Fu" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fu.desc"/>
         <Abbreviation name="Fuel" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fuel.desc"/>
         <Abbreviation name="Full" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Full.desc"/>
         <Abbreviation name="Fun" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fun.desc"/>
         <Abbreviation name="Fwd" descID="IEC61850_7_4.Abbreviations::AbbrTermF.Fwd.desc"/>
         <Abbreviation name="Gain" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gain.desc"/>
         <Abbreviation name="Gas" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gas.desc"/>
         <Abbreviation name="Gbx" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gbx.desc"/>
         <Abbreviation name="Gdv" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gdv.desc"/>
         <Abbreviation name="Gen" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gen.desc"/>
         <Abbreviation name="Glob" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Glob.desc"/>
         <Abbreviation name="Gm" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gm.desc"/>
         <Abbreviation name="Gn" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gn.desc"/>
         <Abbreviation name="Gnd" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gnd.desc"/>
         <Abbreviation name="GoCBRef"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermG.GoCBRef.desc"/>
         <Abbreviation name="Gocb" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gocb.desc"/>
         <Abbreviation name="Gr" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gr.desc"/>
         <Abbreviation name="Gra" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gra.desc"/>
         <Abbreviation name="Grd" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Grd.desc"/>
         <Abbreviation name="Gri" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gri.desc"/>
         <Abbreviation name="Gross" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gross.desc"/>
         <Abbreviation name="Gs" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gs.desc"/>
         <Abbreviation name="Gte" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gte.desc"/>
         <Abbreviation name="Gust" descID="IEC61850_7_4.Abbreviations::AbbrTermG.Gust.desc"/>
         <Abbreviation name="H" descID="IEC61850_7_4.Abbreviations::AbbrTermH.H.desc"/>
         <Abbreviation name="H2" descID="IEC61850_7_4.Abbreviations::AbbrTermH.H2.desc"/>
         <Abbreviation name="H2O" descID="IEC61850_7_4.Abbreviations::AbbrTermH.H2O.desc"/>
         <Abbreviation name="HP" descID="IEC61850_7_4.Abbreviations::AbbrTermH.HP.desc"/>
         <Abbreviation name="HPh" descID="IEC61850_7_4.Abbreviations::AbbrTermH.HPh.desc"/>
         <Abbreviation name="Ha" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Ha.desc"/>
         <Abbreviation name="Har" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Har.desc"/>
         <Abbreviation name="Hb" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hb.desc"/>
         <Abbreviation name="Hd" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hd.desc"/>
         <Abbreviation name="Health"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermH.Health.desc"/>
         <Abbreviation name="Heat" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Heat.desc"/>
         <Abbreviation name="Hello" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hello.desc"/>
         <Abbreviation name="Hi" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hi.desc"/>
         <Abbreviation name="Hlf" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hlf.desc"/>
         <Abbreviation name="Hold" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hold.desc"/>
         <Abbreviation name="Hor" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hor.desc"/>
         <Abbreviation name="Horn" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Horn.desc"/>
         <Abbreviation name="Ht" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Ht.desc"/>
         <Abbreviation name="Htex" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Htex.desc"/>
         <Abbreviation name="Hub" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hub.desc"/>
         <Abbreviation name="Hum" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hum.desc"/>
         <Abbreviation name="Hy" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hy.desc"/>
         <Abbreviation name="Hyd" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hyd.desc"/>
         <Abbreviation name="Hys" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hys.desc"/>
         <Abbreviation name="Hz" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hz.desc"/>
         <Abbreviation name="Hz1" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hz1.desc"/>
         <Abbreviation name="Hz2" descID="IEC61850_7_4.Abbreviations::AbbrTermH.Hz2.desc"/>
         <Abbreviation name="I" descID="IEC61850_7_4.Abbreviations::AbbrTermI.I.desc"/>
         <Abbreviation name="ING" descID="IEC61850_7_4.Abbreviations::AbbrTermI.ING.desc"/>
         <Abbreviation name="INS" descID="IEC61850_7_4.Abbreviations::AbbrTermI.INS.desc"/>
         <Abbreviation name="ISCSO" descID="IEC61850_7_4.Abbreviations::AbbrTermI.ISCSO.desc"/>
         <Abbreviation name="Ia" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ia.desc"/>
         <Abbreviation name="Iafm" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iafm.desc"/>
         <Abbreviation name="Iano" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iano.desc"/>
         <Abbreviation name="Ianofo"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ianofo.desc"/>
         <Abbreviation name="Ianopca"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ianopca.desc"/>
         <Abbreviation name="Ianos" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ianos.desc"/>
         <Abbreviation name="Ianosm"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ianosm.desc"/>
         <Abbreviation name="Iao" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iao.desc"/>
         <Abbreviation name="Iaog" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaog.desc"/>
         <Abbreviation name="Iaogfp"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaogfp.desc"/>
         <Abbreviation name="Iaogpp"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaogpp.desc"/>
         <Abbreviation name="Iaong" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaong.desc"/>
         <Abbreviation name="Iaongel"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaongel.desc"/>
         <Abbreviation name="Iaongen"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaongen.desc"/>
         <Abbreviation name="Iaongrs"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaongrs.desc"/>
         <Abbreviation name="Iaongts"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iaongts.desc"/>
         <Abbreviation name="Ice" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ice.desc"/>
         <Abbreviation name="Id" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Id.desc"/>
         <Abbreviation name="Ieee" descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.Ieee.desc"/>
         <Abbreviation name="IeeeKH"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKH.desc"/>
         <Abbreviation name="IeeeKH1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKH1.desc"/>
         <Abbreviation name="IeeeKH11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKH11.desc"/>
         <Abbreviation name="IeeeKH17"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKH17.desc"/>
         <Abbreviation name="IeeeKH2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKH2.desc"/>
         <Abbreviation name="IeeeKI"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKI.desc"/>
         <Abbreviation name="IeeeKI1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKI1.desc"/>
         <Abbreviation name="IeeeKI11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKI11.desc"/>
         <Abbreviation name="IeeeKI17"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKI17.desc"/>
         <Abbreviation name="IeeeKI2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKI2.desc"/>
         <Abbreviation name="IeeeKL"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKL.desc"/>
         <Abbreviation name="IeeeKL1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKL1.desc"/>
         <Abbreviation name="IeeeKL11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKL11.desc"/>
         <Abbreviation name="IeeeKL17"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKL17.desc"/>
         <Abbreviation name="IeeeKL2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKL2.desc"/>
         <Abbreviation name="IeeeKs1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKs1.desc"/>
         <Abbreviation name="IeeeKs2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKs2.desc"/>
         <Abbreviation name="IeeeKs3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeKs3.desc"/>
         <Abbreviation name="IeeeM"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeM.desc"/>
         <Abbreviation name="IeeeN"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeN.desc"/>
         <Abbreviation name="IeeeT1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT1.desc"/>
         <Abbreviation name="IeeeT10"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT10.desc"/>
         <Abbreviation name="IeeeT11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT11.desc"/>
         <Abbreviation name="IeeeT2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT2.desc"/>
         <Abbreviation name="IeeeT3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT3.desc"/>
         <Abbreviation name="IeeeT4"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT4.desc"/>
         <Abbreviation name="IeeeT7"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT7.desc"/>
         <Abbreviation name="IeeeT8"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT8.desc"/>
         <Abbreviation name="IeeeT9"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeT9.desc"/>
         <Abbreviation name="IeeeTH1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH1.desc"/>
         <Abbreviation name="IeeeTH10"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH10.desc"/>
         <Abbreviation name="IeeeTH11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH11.desc"/>
         <Abbreviation name="IeeeTH12"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH12.desc"/>
         <Abbreviation name="IeeeTH2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH2.desc"/>
         <Abbreviation name="IeeeTH3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH3.desc"/>
         <Abbreviation name="IeeeTH4"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH4.desc"/>
         <Abbreviation name="IeeeTH5"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH5.desc"/>
         <Abbreviation name="IeeeTH6"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH6.desc"/>
         <Abbreviation name="IeeeTH7"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH7.desc"/>
         <Abbreviation name="IeeeTH8"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH8.desc"/>
         <Abbreviation name="IeeeTH9"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTH9.desc"/>
         <Abbreviation name="IeeeTI1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI1.desc"/>
         <Abbreviation name="IeeeTI10"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI10.desc"/>
         <Abbreviation name="IeeeTI11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI11.desc"/>
         <Abbreviation name="IeeeTI12"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI12.desc"/>
         <Abbreviation name="IeeeTI2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI2.desc"/>
         <Abbreviation name="IeeeTI3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI3.desc"/>
         <Abbreviation name="IeeeTI4"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI4.desc"/>
         <Abbreviation name="IeeeTI5"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI5.desc"/>
         <Abbreviation name="IeeeTI6"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI6.desc"/>
         <Abbreviation name="IeeeTI7"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI7.desc"/>
         <Abbreviation name="IeeeTI8"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI8.desc"/>
         <Abbreviation name="IeeeTI9"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTI9.desc"/>
         <Abbreviation name="IeeeTL1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL1.desc"/>
         <Abbreviation name="IeeeTL10"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL10.desc"/>
         <Abbreviation name="IeeeTL11"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL11.desc"/>
         <Abbreviation name="IeeeTL12"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL12.desc"/>
         <Abbreviation name="IeeeTL2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL2.desc"/>
         <Abbreviation name="IeeeTL3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL3.desc"/>
         <Abbreviation name="IeeeTL4"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL4.desc"/>
         <Abbreviation name="IeeeTL5"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL5.desc"/>
         <Abbreviation name="IeeeTL6"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL6.desc"/>
         <Abbreviation name="IeeeTL7"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL7.desc"/>
         <Abbreviation name="IeeeTL8"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL8.desc"/>
         <Abbreviation name="IeeeTL9"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTL9.desc"/>
         <Abbreviation name="IeeeTw1"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTw1.desc"/>
         <Abbreviation name="IeeeTw2"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTw2.desc"/>
         <Abbreviation name="IeeeTw3"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTw3.desc"/>
         <Abbreviation name="IeeeTw4"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeTw4.desc"/>
         <Abbreviation name="IeeeVHMax"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVHMax.desc"/>
         <Abbreviation name="IeeeVHMin"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVHMin.desc"/>
         <Abbreviation name="IeeeVIMax"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVIMax.desc"/>
         <Abbreviation name="IeeeVIMin"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVIMin.desc"/>
         <Abbreviation name="IeeeVLMax"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVLMax.desc"/>
         <Abbreviation name="IeeeVLMin"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVLMin.desc"/>
         <Abbreviation name="IeeeVsi1Max"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVsi1Max.desc"/>
         <Abbreviation name="IeeeVsi1Min"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVsi1Min.desc"/>
         <Abbreviation name="IeeeVsi2Max"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVsi2Max.desc"/>
         <Abbreviation name="IeeeVsi2Min"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVsi2Min.desc"/>
         <Abbreviation name="IeeeVstMax"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVstMax.desc"/>
         <Abbreviation name="IeeeVstMin"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermIeee.IeeeVstMin.desc"/>
         <Abbreviation name="Imb" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Imb.desc"/>
         <Abbreviation name="Imp" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Imp.desc"/>
         <Abbreviation name="Impact"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermI.Impact.desc"/>
         <Abbreviation name="Impt" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Impt.desc"/>
         <Abbreviation name="In" descID="IEC61850_7_4.Abbreviations::AbbrTermI.In.desc"/>
         <Abbreviation name="Ina" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ina.desc"/>
         <Abbreviation name="Inc" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inc.desc"/>
         <Abbreviation name="Incl" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Incl.desc"/>
         <Abbreviation name="Incr" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Incr.desc"/>
         <Abbreviation name="Ind" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ind.desc"/>
         <Abbreviation name="Indp" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Indp.desc"/>
         <Abbreviation name="Iner" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iner.desc"/>
         <Abbreviation name="Inh" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inh.desc"/>
         <Abbreviation name="Inl" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inl.desc"/>
         <Abbreviation name="Inlet" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inlet.desc"/>
         <Abbreviation name="Inn" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inn.desc"/>
         <Abbreviation name="Ins" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ins.desc"/>
         <Abbreviation name="Insol" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Insol.desc"/>
         <Abbreviation name="Inst" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inst.desc"/>
         <Abbreviation name="Int" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Int.desc"/>
         <Abbreviation name="Intm" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Intm.desc"/>
         <Abbreviation name="Intn" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Intn.desc"/>
         <Abbreviation name="Intr" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Intr.desc"/>
         <Abbreviation name="Intv" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Intv.desc"/>
         <Abbreviation name="Inv" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Inv.desc"/>
         <Abbreviation name="Isc" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Isc.desc"/>
         <Abbreviation name="Isld" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Isld.desc"/>
         <Abbreviation name="Iso" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iso.desc"/>
         <Abbreviation name="Iu" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Iu.desc"/>
         <Abbreviation name="Ix" descID="IEC61850_7_4.Abbreviations::AbbrTermI.Ix.desc"/>
         <Abbreviation name="Jmp" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.Jmp.desc"/>
         <Abbreviation name="Jnt" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.Jnt.desc"/>
         <Abbreviation name="K" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.K.desc"/>
         <Abbreviation name="K0Fact"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermJK.K0Fact.desc"/>
         <Abbreviation name="KFact" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.KFact.desc"/>
         <Abbreviation name="Kck" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.Kck.desc"/>
         <Abbreviation name="Key" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.Key.desc"/>
         <Abbreviation name="L" descID="IEC61850_7_4.Abbreviations::AbbrTermL.L.desc"/>
         <Abbreviation name="LDC" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LDC.desc"/>
         <Abbreviation name="LDCR" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LDCR.desc"/>
         <Abbreviation name="LDCX" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LDCX.desc"/>
         <Abbreviation name="LDCZ" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LDCZ.desc"/>
         <Abbreviation name="LED" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LED.desc"/>
         <Abbreviation name="LTC" descID="IEC61850_7_4.Abbreviations::AbbrTermL.LTC.desc"/>
         <Abbreviation name="Last" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Last.desc"/>
         <Abbreviation name="Ld" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Ld.desc"/>
         <Abbreviation name="Ldp" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Ldp.desc"/>
         <Abbreviation name="Leap" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Leap.desc"/>
         <Abbreviation name="Len" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Len.desc"/>
         <Abbreviation name="Lev" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lev.desc"/>
         <Abbreviation name="Lft" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lft.desc"/>
         <Abbreviation name="Lg" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lg.desc"/>
         <Abbreviation name="Life" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Life.desc"/>
         <Abbreviation name="Lim" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lim.desc"/>
         <Abbreviation name="Lin" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lin.desc"/>
         <Abbreviation name="Liv" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Liv.desc"/>
         <Abbreviation name="Lkd" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lkd.desc"/>
         <Abbreviation name="Lkg" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lkg.desc"/>
         <Abbreviation name="Ll" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Ll.desc"/>
         <Abbreviation name="Lo" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lo.desc"/>
         <Abbreviation name="Loc" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Loc.desc"/>
         <Abbreviation name="Locb" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Locb.desc"/>
         <Abbreviation name="Lod" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lod.desc"/>
         <Abbreviation name="Log" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Log.desc"/>
         <Abbreviation name="Lok" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lok.desc"/>
         <Abbreviation name="Loop" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Loop.desc"/>
         <Abbreviation name="Los" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Los.desc"/>
         <Abbreviation name="Ls" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Ls.desc"/>
         <Abbreviation name="Lst" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lst.desc"/>
         <Abbreviation name="Lub" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lub.desc"/>
         <Abbreviation name="Lum" descID="IEC61850_7_4.Abbreviations::AbbrTermL.Lum.desc"/>
         <Abbreviation name="M" descID="IEC61850_7_4.Abbreviations::AbbrTermM.M.desc"/>
         <Abbreviation name="MV" descID="IEC61850_7_4.Abbreviations::AbbrTermM.MV.desc"/>
         <Abbreviation name="Mac" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mac.desc"/>
         <Abbreviation name="Made" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Made.desc"/>
         <Abbreviation name="Mag" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mag.desc"/>
         <Abbreviation name="Maint" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Maint.desc"/>
         <Abbreviation name="Man" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Man.desc"/>
         <Abbreviation name="Mat" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mat.desc"/>
         <Abbreviation name="Mau" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mau.desc"/>
         <Abbreviation name="Max" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Max.desc"/>
         <Abbreviation name="Mbr" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mbr.desc"/>
         <Abbreviation name="Md" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Md.desc"/>
         <Abbreviation name="Mdul" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mdul.desc"/>
         <Abbreviation name="Meas" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Meas.desc"/>
         <Abbreviation name="Mech" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mech.desc"/>
         <Abbreviation name="Media" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Media.desc"/>
         <Abbreviation name="Mem" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mem.desc"/>
         <Abbreviation name="Min" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Min.desc"/>
         <Abbreviation name="Mir" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mir.desc"/>
         <Abbreviation name="Mlt" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mlt.desc"/>
         <Abbreviation name="Mns" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mns.desc"/>
         <Abbreviation name="Mod" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mod.desc"/>
         <Abbreviation name="Mot" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mot.desc"/>
         <Abbreviation name="Mrg" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mrg.desc"/>
         <Abbreviation name="Mrk" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mrk.desc"/>
         <Abbreviation name="Mst" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mst.desc"/>
         <Abbreviation name="Msv" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Msv.desc"/>
         <Abbreviation name="Msvcb" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Msvcb.desc"/>
         <Abbreviation name="Mth" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mth.desc"/>
         <Abbreviation name="Mult" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mult.desc"/>
         <Abbreviation name="Mvm" descID="IEC61850_7_4.Abbreviations::AbbrTermM.Mvm.desc"/>
         <Abbreviation name="N2" descID="IEC61850_7_4.Abbreviations::AbbrTermN.N2.desc"/>
         <Abbreviation name="NOx" descID="IEC61850_7_4.Abbreviations::AbbrTermN.NOx.desc"/>
         <Abbreviation name="NQS" descID="IEC61850_7_4.Abbreviations::AbbrTermN.NQS.desc"/>
         <Abbreviation name="Nam" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Nam.desc"/>
         <Abbreviation name="Name" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Name.desc"/>
         <Abbreviation name="Ndl" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Ndl.desc"/>
         <Abbreviation name="NdsCom"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermN.NdsCom.desc"/>
         <Abbreviation name="Neut" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Neut.desc"/>
         <Abbreviation name="Ng" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Ng.desc"/>
         <Abbreviation name="Ngt" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Ngt.desc"/>
         <Abbreviation name="Nhd" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Nhd.desc"/>
         <Abbreviation name="Night" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Night.desc"/>
         <Abbreviation name="No" descID="IEC61850_7_4.Abbreviations::AbbrTermN.No.desc"/>
         <Abbreviation name="Nom" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Nom.desc"/>
         <Abbreviation name="Num" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Num.desc"/>
         <Abbreviation name="Nxt" descID="IEC61850_7_4.Abbreviations::AbbrTermN.Nxt.desc"/>
         <Abbreviation name="O2" descID="IEC61850_7_4.Abbreviations::AbbrTermO.O2.desc"/>
         <Abbreviation name="O3" descID="IEC61850_7_4.Abbreviations::AbbrTermO.O3.desc"/>
         <Abbreviation name="Obl" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Obl.desc"/>
         <Abbreviation name="Oc" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Oc.desc"/>
         <Abbreviation name="Odd" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Odd.desc"/>
         <Abbreviation name="Of" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Of.desc"/>
         <Abbreviation name="Off" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Off.desc"/>
         <Abbreviation name="Ofs" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Ofs.desc"/>
         <Abbreviation name="Oil" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Oil.desc"/>
         <Abbreviation name="On" descID="IEC61850_7_4.Abbreviations::AbbrTermO.On.desc"/>
         <Abbreviation name="Oo" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Oo.desc"/>
         <Abbreviation name="Op" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Op.desc"/>
         <Abbreviation name="Operate"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermO.Operate.desc"/>
         <Abbreviation name="Opn" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Opn.desc"/>
         <Abbreviation name="Ord" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Ord.desc"/>
         <Abbreviation name="Out" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Out.desc"/>
         <Abbreviation name="Ov" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Ov.desc"/>
         <Abbreviation name="Ovl" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Ovl.desc"/>
         <Abbreviation name="Ox" descID="IEC61850_7_4.Abbreviations::AbbrTermO.Ox.desc"/>
         <Abbreviation name="P" descID="IEC61850_7_4.Abbreviations::AbbrTermP.P.desc"/>
         <Abbreviation name="PF" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PF.desc"/>
         <Abbreviation name="PH" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PH.desc"/>
         <Abbreviation name="PNV" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PNV.desc"/>
         <Abbreviation name="POW" descID="IEC61850_7_4.Abbreviations::AbbrTermP.POW.desc"/>
         <Abbreviation name="PP" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PP.desc"/>
         <Abbreviation name="PPV" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PPV.desc"/>
         <Abbreviation name="PT1" descID="IEC61850_7_4.Abbreviations::AbbrTermP.PT1.desc"/>
         <Abbreviation name="Pa" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pa.desc"/>
         <Abbreviation name="Pair" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pair.desc"/>
         <Abbreviation name="Pap" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pap.desc"/>
         <Abbreviation name="Par" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Par.desc"/>
         <Abbreviation name="Pas" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pas.desc"/>
         <Abbreviation name="Path" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Path.desc"/>
         <Abbreviation name="Pcb" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pcb.desc"/>
         <Abbreviation name="Pct" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pct.desc"/>
         <Abbreviation name="Pdm" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pdm.desc"/>
         <Abbreviation name="Pe" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pe.desc"/>
         <Abbreviation name="Per" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Per.desc"/>
         <Abbreviation name="Ph" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Ph.desc"/>
         <Abbreviation name="Phs" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Phs.desc"/>
         <Abbreviation name="Phy" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Phy.desc"/>
         <Abbreviation name="Pi" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pi.desc"/>
         <Abbreviation name="Pin" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pin.desc"/>
         <Abbreviation name="Pipe" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pipe.desc"/>
         <Abbreviation name="Pk" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pk.desc"/>
         <Abbreviation name="Pl" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pl.desc"/>
         <Abbreviation name="Plg" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Plg.desc"/>
         <Abbreviation name="Pls" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pls.desc"/>
         <Abbreviation name="Plt" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Plt.desc"/>
         <Abbreviation name="Pmp" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pmp.desc"/>
         <Abbreviation name="Po" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Po.desc"/>
         <Abbreviation name="Pol" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pol.desc"/>
         <Abbreviation name="Polytr"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermP.Polytr.desc"/>
         <Abbreviation name="Port" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Port.desc"/>
         <Abbreviation name="Pos" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pos.desc"/>
         <Abbreviation name="Pot" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pot.desc"/>
         <Abbreviation name="Prc" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prc.desc"/>
         <Abbreviation name="Pre" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pre.desc"/>
         <Abbreviation name="Prec" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prec.desc"/>
         <Abbreviation name="Pres" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pres.desc"/>
         <Abbreviation name="Prg" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prg.desc"/>
         <Abbreviation name="Prim" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prim.desc"/>
         <Abbreviation name="Prio" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prio.desc"/>
         <Abbreviation name="Prm" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prm.desc"/>
         <Abbreviation name="Pro" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pro.desc"/>
         <Abbreviation name="Proc" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Proc.desc"/>
         <Abbreviation name="Proxy" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Proxy.desc"/>
         <Abbreviation name="Prs" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prs.desc"/>
         <Abbreviation name="Prt" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Prt.desc"/>
         <Abbreviation name="Ps" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Ps.desc"/>
         <Abbreviation name="Psk" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Psk.desc"/>
         <Abbreviation name="Pss" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pss.desc"/>
         <Abbreviation name="Pst" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pst.desc"/>
         <Abbreviation name="Pt" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pt.desc"/>
         <Abbreviation name="Pth" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pth.desc"/>
         <Abbreviation name="Pwr" descID="IEC61850_7_4.Abbreviations::AbbrTermP.Pwr.desc"/>
         <Abbreviation name="Qty" descID="IEC61850_7_4.Abbreviations::AbbrTermQ.Qty.desc"/>
         <Abbreviation name="Qu" descID="IEC61850_7_4.Abbreviations::AbbrTermQ.Qu.desc"/>
         <Abbreviation name="Qud" descID="IEC61850_7_4.Abbreviations::AbbrTermQ.Qud.desc"/>
         <Abbreviation name="R" descID="IEC61850_7_4.Abbreviations::AbbrTermR.R.desc"/>
         <Abbreviation name="Rad" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rad.desc"/>
         <Abbreviation name="Ral" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Ral.desc"/>
         <Abbreviation name="Ramp" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Ramp.desc"/>
         <Abbreviation name="Rat" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rat.desc"/>
         <Abbreviation name="Rb" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rb.desc"/>
         <Abbreviation name="Rcd" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rcd.desc"/>
         <Abbreviation name="Rch" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rch.desc"/>
         <Abbreviation name="Rcl" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rcl.desc"/>
         <Abbreviation name="Rct" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rct.desc"/>
         <Abbreviation name="Rdy" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rdy.desc"/>
         <Abbreviation name="Re" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Re.desc"/>
         <Abbreviation name="React" descID="IEC61850_7_4.Abbreviations::AbbrTermR.React.desc"/>
         <Abbreviation name="Rec" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rec.desc"/>
         <Abbreviation name="Rec1" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rec1.desc"/>
         <Abbreviation name="Rec13" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rec13.desc"/>
         <Abbreviation name="Rec3" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rec3.desc"/>
         <Abbreviation name="Recha" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Recha.desc"/>
         <Abbreviation name="Rect" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rect.desc"/>
         <Abbreviation name="Red" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Red.desc"/>
         <Abbreviation name="Ref" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Ref.desc"/>
         <Abbreviation name="Reg" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Reg.desc"/>
         <Abbreviation name="Rel" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rel.desc"/>
         <Abbreviation name="Req" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Req.desc"/>
         <Abbreviation name="Res" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Res.desc"/>
         <Abbreviation name="Reso" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Reso.desc"/>
         <Abbreviation name="Reuse" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Reuse.desc"/>
         <Abbreviation name="Rev" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rev.desc"/>
         <Abbreviation name="Rf" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rf.desc"/>
         <Abbreviation name="Rin" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rin.desc"/>
         <Abbreviation name="Ris" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Ris.desc"/>
         <Abbreviation name="Rl" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rl.desc"/>
         <Abbreviation name="Rm" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rm.desc"/>
         <Abbreviation name="Rmp" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rmp.desc"/>
         <Abbreviation name="Rms" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rms.desc"/>
         <Abbreviation name="Rn" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rn.desc"/>
         <Abbreviation name="Rnbk" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rnbk.desc"/>
         <Abbreviation name="Rng" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rng.desc"/>
         <Abbreviation name="Rod" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rod.desc"/>
         <Abbreviation name="Root" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Root.desc"/>
         <Abbreviation name="Rot" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rot.desc"/>
         <Abbreviation name="Rpt" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rpt.desc"/>
         <Abbreviation name="Rs" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rs.desc"/>
         <Abbreviation name="Rsl" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rsl.desc"/>
         <Abbreviation name="Rst" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rst.desc"/>
         <Abbreviation name="Rsv" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rsv.desc"/>
         <Abbreviation name="Rt" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rt.desc"/>
         <Abbreviation name="Rte" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rte.desc"/>
         <Abbreviation name="Rtg" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rtg.desc"/>
         <Abbreviation name="Rub" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rub.desc"/>
         <Abbreviation name="Run" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Run.desc"/>
         <Abbreviation name="Rv" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rv.desc"/>
         <Abbreviation name="Rvc" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rvc.desc"/>
         <Abbreviation name="Rvrt" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rvrt.desc"/>
         <Abbreviation name="Rwy" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rwy.desc"/>
         <Abbreviation name="Rx" descID="IEC61850_7_4.Abbreviations::AbbrTermR.Rx.desc"/>
         <Abbreviation name="S10" descID="IEC61850_7_4.Abbreviations::AbbrTermS.S10.desc"/>
         <Abbreviation name="S12" descID="IEC61850_7_4.Abbreviations::AbbrTermS.S12.desc"/>
         <Abbreviation name="SM" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SM.desc"/>
         <Abbreviation name="SNL" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SNL.desc"/>
         <Abbreviation name="SOx" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SOx.desc"/>
         <Abbreviation name="SPCSO" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SPCSO.desc"/>
         <Abbreviation name="SPG" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SPG.desc"/>
         <Abbreviation name="SPS" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SPS.desc"/>
         <Abbreviation name="SPl" descID="IEC61850_7_4.Abbreviations::AbbrTermS.SPl.desc"/>
         <Abbreviation name="ST" descID="IEC61850_7_4.Abbreviations::AbbrTermS.ST.desc"/>
         <Abbreviation name="Saf" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Saf.desc"/>
         <Abbreviation name="Sag" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sag.desc"/>
         <Abbreviation name="Sar" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sar.desc"/>
         <Abbreviation name="Sat" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sat.desc"/>
         <Abbreviation name="Sc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sc.desc"/>
         <Abbreviation name="Scale" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Scale.desc"/>
         <Abbreviation name="Schd" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Schd.desc"/>
         <Abbreviation name="Scnd" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Scnd.desc"/>
         <Abbreviation name="Sco" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sco.desc"/>
         <Abbreviation name="Sec" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sec.desc"/>
         <Abbreviation name="Sel" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sel.desc"/>
         <Abbreviation name="Self" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Self.desc"/>
         <Abbreviation name="Seq" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Seq.desc"/>
         <Abbreviation name="Ser" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Ser.desc"/>
         <Abbreviation name="Set" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Set.desc"/>
         <Abbreviation name="Sgcb" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sgcb.desc"/>
         <Abbreviation name="Sh" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sh.desc"/>
         <Abbreviation name="Shar" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Shar.desc"/>
         <Abbreviation name="Shft" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Shft.desc"/>
         <Abbreviation name="Shld" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Shld.desc"/>
         <Abbreviation name="Sig" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sig.desc"/>
         <Abbreviation name="Sign" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sign.desc"/>
         <Abbreviation name="Sim" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sim.desc"/>
         <Abbreviation name="Sld" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sld.desc"/>
         <Abbreviation name="Slnt" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Slnt.desc"/>
         <Abbreviation name="Slp" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Slp.desc"/>
         <Abbreviation name="Smok" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Smok.desc"/>
         <Abbreviation name="Smp" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Smp.desc"/>
         <Abbreviation name="Snd" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Snd.desc"/>
         <Abbreviation name="Snpt" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Snpt.desc"/>
         <Abbreviation name="Snr" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Snr.desc"/>
         <Abbreviation name="Snw" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Snw.desc"/>
         <Abbreviation name="Soc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Soc.desc"/>
         <Abbreviation name="Sof" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sof.desc"/>
         <Abbreviation name="Spc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spc.desc"/>
         <Abbreviation name="Spcf" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spcf.desc"/>
         <Abbreviation name="Spd" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spd.desc"/>
         <Abbreviation name="Spec" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spec.desc"/>
         <Abbreviation name="Spir" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spir.desc"/>
         <Abbreviation name="Spt" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Spt.desc"/>
         <Abbreviation name="Sq" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sq.desc"/>
         <Abbreviation name="Src" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Src.desc"/>
         <Abbreviation name="Srfc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Srfc.desc"/>
         <Abbreviation name="St" descID="IEC61850_7_4.Abbreviations::AbbrTermS.St.desc"/>
         <Abbreviation name="Sta" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sta.desc"/>
         <Abbreviation name="Stab" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stab.desc"/>
         <Abbreviation name="Stat" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stat.desc"/>
         <Abbreviation name="Stc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stc.desc"/>
         <Abbreviation name="Std" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Std.desc"/>
         <Abbreviation name="Stdby" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stdby.desc"/>
         <Abbreviation name="Step" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Step.desc"/>
         <Abbreviation name="Stk" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stk.desc"/>
         <Abbreviation name="Stl" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stl.desc"/>
         <Abbreviation name="Stnd" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stnd.desc"/>
         <Abbreviation name="Sto" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sto.desc"/>
         <Abbreviation name="Stop" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stop.desc"/>
         <Abbreviation name="Storm" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Storm.desc"/>
         <Abbreviation name="Stow" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stow.desc"/>
         <Abbreviation name="Str" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Str.desc"/>
         <Abbreviation name="Strg" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Strg.desc"/>
         <Abbreviation name="Stt" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stt.desc"/>
         <Abbreviation name="Stuck" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Stuck.desc"/>
         <Abbreviation name="Sub" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sub.desc"/>
         <Abbreviation name="Sum" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sum.desc"/>
         <Abbreviation name="Sup" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sup.desc"/>
         <Abbreviation name="Sv" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sv.desc"/>
         <Abbreviation name="SvCBRef"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermS.SvCBRef.desc"/>
         <Abbreviation name="Svc" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Svc.desc"/>
         <Abbreviation name="Sw" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sw.desc"/>
         <Abbreviation name="Swg" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Swg.desc"/>
         <Abbreviation name="Swl" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Swl.desc"/>
         <Abbreviation name="Syn" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Syn.desc"/>
         <Abbreviation name="Sys" descID="IEC61850_7_4.Abbreviations::AbbrTermS.Sys.desc"/>
         <Abbreviation name="TP" descID="IEC61850_7_4.Abbreviations::AbbrTermT.TP.desc"/>
         <Abbreviation name="Ta" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Ta.desc"/>
         <Abbreviation name="Tag" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tag.desc"/>
         <Abbreviation name="Tap" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tap.desc"/>
         <Abbreviation name="Task" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Task.desc"/>
         <Abbreviation name="Td" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Td.desc"/>
         <Abbreviation name="Td0p" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Td0p.desc"/>
         <Abbreviation name="Td0s" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Td0s.desc"/>
         <Abbreviation name="Tdd" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tdd.desc"/>
         <Abbreviation name="Tdf" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tdf.desc"/>
         <Abbreviation name="Tdp" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tdp.desc"/>
         <Abbreviation name="Tds" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tds.desc"/>
         <Abbreviation name="Tech" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tech.desc"/>
         <Abbreviation name="Term" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Term.desc"/>
         <Abbreviation name="Test" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Test.desc"/>
         <Abbreviation name="Tgt" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tgt.desc"/>
         <Abbreviation name="Thd" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Thd.desc"/>
         <Abbreviation name="Thm" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Thm.desc"/>
         <Abbreviation name="Ti" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Ti.desc"/>
         <Abbreviation name="Tilt" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tilt.desc"/>
         <Abbreviation name="Tm" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tm.desc"/>
         <Abbreviation name="Tm1" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tm1.desc"/>
         <Abbreviation name="Tm2" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tm2.desc"/>
         <Abbreviation name="Tm3" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tm3.desc"/>
         <Abbreviation name="Tmh" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tmh.desc"/>
         <Abbreviation name="Tmm" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tmm.desc"/>
         <Abbreviation name="Tmms" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tmms.desc"/>
         <Abbreviation name="Tmp" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tmp.desc"/>
         <Abbreviation name="Tms" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tms.desc"/>
         <Abbreviation name="Tnk" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tnk.desc"/>
         <Abbreviation name="Tns" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tns.desc"/>
         <Abbreviation name="Top" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Top.desc"/>
         <Abbreviation name="Topo" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Topo.desc"/>
         <Abbreviation name="Torq" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Torq.desc"/>
         <Abbreviation name="Tot" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tot.desc"/>
         <Abbreviation name="Tow" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tow.desc"/>
         <Abbreviation name="Tp" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tp.desc"/>
         <Abbreviation name="Tpc" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tpc.desc"/>
         <Abbreviation name="Tpy" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tpy.desc"/>
         <Abbreviation name="Tq0p" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tq0p.desc"/>
         <Abbreviation name="Tq0s" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tq0s.desc"/>
         <Abbreviation name="Tqp" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tqp.desc"/>
         <Abbreviation name="Tqs" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tqs.desc"/>
         <Abbreviation name="Tr" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tr.desc"/>
         <Abbreviation name="Trf" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trf.desc"/>
         <Abbreviation name="Trg" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trg.desc"/>
         <Abbreviation name="Trip" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trip.desc"/>
         <Abbreviation name="Trk" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trk.desc"/>
         <Abbreviation name="Trp" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trp.desc"/>
         <Abbreviation name="Trs" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trs.desc"/>
         <Abbreviation name="Trunk" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Trunk.desc"/>
         <Abbreviation name="Ts" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Ts.desc"/>
         <Abbreviation name="Tu" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tu.desc"/>
         <Abbreviation name="Tun" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tun.desc"/>
         <Abbreviation name="Tur" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tur.desc"/>
         <Abbreviation name="Tx" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Tx.desc"/>
         <Abbreviation name="Typ" descID="IEC61850_7_4.Abbreviations::AbbrTermT.Typ.desc"/>
         <Abbreviation name="UPS" descID="IEC61850_7_4.Abbreviations::AbbrTermU.UPS.desc"/>
         <Abbreviation name="UTC" descID="IEC61850_7_4.Abbreviations::AbbrTermU.UTC.desc"/>
         <Abbreviation name="Uhf" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Uhf.desc"/>
         <Abbreviation name="Un" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Un.desc"/>
         <Abbreviation name="Unav" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Unav.desc"/>
         <Abbreviation name="Unb" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Unb.desc"/>
         <Abbreviation name="Unld" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Unld.desc"/>
         <Abbreviation name="Unt" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Unt.desc"/>
         <Abbreviation name="Up" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Up.desc"/>
         <Abbreviation name="Ups" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Ups.desc"/>
         <Abbreviation name="Urcb" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Urcb.desc"/>
         <Abbreviation name="Use" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Use.desc"/>
         <Abbreviation name="Used" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Used.desc"/>
         <Abbreviation name="Usvcb" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Usvcb.desc"/>
         <Abbreviation name="Util" descID="IEC61850_7_4.Abbreviations::AbbrTermU.Util.desc"/>
         <Abbreviation name="V" descID="IEC61850_7_4.Abbreviations::AbbrTermV.V.desc"/>
         <Abbreviation name="V1" descID="IEC61850_7_4.Abbreviations::AbbrTermV.V1.desc"/>
         <Abbreviation name="V2" descID="IEC61850_7_4.Abbreviations::AbbrTermV.V2.desc"/>
         <Abbreviation name="VA" descID="IEC61850_7_4.Abbreviations::AbbrTermV.VA.desc"/>
         <Abbreviation name="VAh" descID="IEC61850_7_4.Abbreviations::AbbrTermV.VAh.desc"/>
         <Abbreviation name="VAr" descID="IEC61850_7_4.Abbreviations::AbbrTermV.VAr.desc"/>
         <Abbreviation name="VArh" descID="IEC61850_7_4.Abbreviations::AbbrTermV.VArh.desc"/>
         <Abbreviation name="Va" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Va.desc"/>
         <Abbreviation name="Vac" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vac.desc"/>
         <Abbreviation name="Val" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Val.desc"/>
         <Abbreviation name="Vbr" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vbr.desc"/>
         <Abbreviation name="Ver" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Ver.desc"/>
         <Abbreviation name="Viol" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Viol.desc"/>
         <Abbreviation name="Vis" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vis.desc"/>
         <Abbreviation name="Visc" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Visc.desc"/>
         <Abbreviation name="Vlan" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vlan.desc"/>
         <Abbreviation name="Vld" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vld.desc"/>
         <Abbreviation name="Vlm" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vlm.desc"/>
         <Abbreviation name="Vlv" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vlv.desc"/>
         <Abbreviation name="Vol" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vol.desc"/>
         <Abbreviation name="VolAmpr"
                    descID="IEC61850_7_4.Abbreviations::AbbrTermV.VolAmpr.desc"/>
         <Abbreviation name="Vss" descID="IEC61850_7_4.Abbreviations::AbbrTermV.Vss.desc"/>
         <Abbreviation name="W" descID="IEC61850_7_4.Abbreviations::AbbrTermW.W.desc"/>
         <Abbreviation name="W200" descID="IEC61850_7_4.Abbreviations::AbbrTermW.W200.desc"/>
         <Abbreviation name="Wac" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wac.desc"/>
         <Abbreviation name="Wash" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wash.desc"/>
         <Abbreviation name="Watt" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Watt.desc"/>
         <Abbreviation name="Wav" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wav.desc"/>
         <Abbreviation name="Wd" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wd.desc"/>
         <Abbreviation name="Week" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Week.desc"/>
         <Abbreviation name="Wei" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wei.desc"/>
         <Abbreviation name="Wet" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wet.desc"/>
         <Abbreviation name="Wgt" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wgt.desc"/>
         <Abbreviation name="Wh" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wh.desc"/>
         <Abbreviation name="Wid" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wid.desc"/>
         <Abbreviation name="Win" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Win.desc"/>
         <Abbreviation name="Wkup" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wkup.desc"/>
         <Abbreviation name="Wld" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wld.desc"/>
         <Abbreviation name="Wnd" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wnd.desc"/>
         <Abbreviation name="Wrm" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wrm.desc"/>
         <Abbreviation name="Wrn" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wrn.desc"/>
         <Abbreviation name="Wrs" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wrs.desc"/>
         <Abbreviation name="Wtr" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wtr.desc"/>
         <Abbreviation name="Wup" descID="IEC61850_7_4.Abbreviations::AbbrTermW.Wup.desc"/>
         <Abbreviation name="X" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.X.desc"/>
         <Abbreviation name="X0" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.X0.desc"/>
         <Abbreviation name="X1" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.X1.desc"/>
         <Abbreviation name="X2" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.X2.desc"/>
         <Abbreviation name="Xd" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xd.desc"/>
         <Abbreviation name="Xdir" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xdir.desc"/>
         <Abbreviation name="Xdp" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xdp.desc"/>
         <Abbreviation name="Xds" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xds.desc"/>
         <Abbreviation name="Xm" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xm.desc"/>
         <Abbreviation name="Xq" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xq.desc"/>
         <Abbreviation name="Xqp" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xqp.desc"/>
         <Abbreviation name="Xqs" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xqs.desc"/>
         <Abbreviation name="Xsec" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Xsec.desc"/>
         <Abbreviation name="Ydir" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Ydir.desc"/>
         <Abbreviation name="Yw" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Yw.desc"/>
         <Abbreviation name="Z" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Z.desc"/>
         <Abbreviation name="Zer" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Zer.desc"/>
         <Abbreviation name="Zero" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Zero.desc"/>
         <Abbreviation name="Zm" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Zm.desc"/>
         <Abbreviation name="Zn" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Zn.desc"/>
         <Abbreviation name="Zro" descID="IEC61850_7_4.Abbreviations::AbbrTermsXYZ.Zro.desc"/>
         <Abbreviation name="km" descID="IEC61850_7_4.Abbreviations::AbbrTermJK.km.desc"/>
         <Abbreviation name="ppm" descID="IEC61850_7_4.Abbreviations::AbbrTermP.ppm.desc"/>
      </Abbreviations>
   <Enumerations>
         <Enumeration name="AdjustmentKind"
                   titleID="IEC61850_7_4.DOEnums::AdjustmentKind.cl.title">
            <Literal name="Completed" literalVal="1"/>
            <Literal name="Cancelled" literalVal="2"/>
            <Literal name="New adjustments" literalVal="3"/>
            <Literal name="Under way" literalVal="4"/>
         </Enumeration>
         <Enumeration name="AffectedPhasesKind"
                   titleID="IEC61850_7_4.DOEnums::AffectedPhasesKind.cl.title">
            <Literal name="PhaseA" literalVal="1"/>
            <Literal name="PhaseB" literalVal="2"/>
            <Literal name="PhaseAB" literalVal="3"/>
            <Literal name="PhaseC" literalVal="4"/>
            <Literal name="PhaseAC" literalVal="5"/>
            <Literal name="PhaseBC" literalVal="6"/>
            <Literal name="PhaseABC" literalVal="7"/>
            <Literal name="None" literalVal="8"/>
         </Enumeration>
         <Enumeration name="AutoReclosingKind"
                   titleID="IEC61850_7_4.DOEnums::AutoReclosingKind.cl.title">
            <Literal name="Ready" literalVal="1"/>
            <Literal name="InProgress" literalVal="2" deprecated="true"/>
            <Literal name="Successful" literalVal="3"/>
            <Literal name="WaitingForTrip" literalVal="4"/>
            <Literal name="TripFromProtection" literalVal="5"/>
            <Literal name="FaultDisappeared" literalVal="6"/>
            <Literal name="WaitToComplete" literalVal="7"/>
            <Literal name="CBclosed" literalVal="8"/>
            <Literal name="CycleUnsuccessful" literalVal="9"/>
            <Literal name="Unsuccessful" literalVal="10"/>
            <Literal name="Aborted" literalVal="11"/>
            <Literal name="NotReady" literalVal="12"/>
         </Enumeration>
         <Enumeration name="BehaviourModeKind"
                   titleID="IEC61850_7_4.DOEnums::BehaviourModeKind.cl.title">
            <Literal name="on" literalVal="1"/>
            <Literal name="blocked" literalVal="2"/>
            <Literal name="test" literalVal="3"/>
            <Literal name="test/blocked" literalVal="4"/>
            <Literal name="off" literalVal="5"/>
         </Enumeration>
         <Enumeration name="BreakerOpCapabilityKind"
                   titleID="IEC61850_7_4.DOEnums::BreakerOpCapabilityKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Open" literalVal="2"/>
            <Literal name="Close-Open" literalVal="3"/>
            <Literal name="Open-Close-Open" literalVal="4"/>
            <Literal name="Close-Open-Close-Open" literalVal="5"/>
            <Literal name="Open-Close-Open-Close-Open" literalVal="6"/>
            <Literal name="more" literalVal="7"/>
         </Enumeration>
         <Enumeration name="CalcIntervalKind"
                   titleID="IEC61850_7_4.DOEnums::CalcIntervalKind.cl.title">
            <Literal name="MS" literalVal="1"/>
            <Literal name="PER_CYCLE" literalVal="2"/>
            <Literal name="CYCLE" literalVal="3"/>
            <Literal name="DAY" literalVal="4"/>
            <Literal name="WEEK" literalVal="5"/>
            <Literal name="MONTH" literalVal="6"/>
            <Literal name="YEAR" literalVal="7"/>
            <Literal name="EXTERNAL" literalVal="8"/>
         </Enumeration>
         <Enumeration name="CalcMethodKind"
                   titleID="IEC61850_7_4.DOEnums::CalcMethodKind.cl.title">
            <Literal name="UNSPECIFIED"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.UNSPECIFIED.desc"/>
            <Literal name="TRUE_RMS"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.TRUE_RMS.desc"/>
            <Literal name="PEAK_FUNDAMENTAL"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.PEAK_FUNDAMENTAL.desc"/>
            <Literal name="RMS_FUNDAMENTAL"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.RMS_FUNDAMENTAL.desc"/>
            <Literal name="MIN"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.MIN.desc"/>
            <Literal name="MAX"
                  literalVal="6"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.MAX.desc"/>
            <Literal name="AVG"
                  literalVal="7"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.AVG.desc"/>
            <Literal name="SDV"
                  literalVal="8"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.SDV.desc"/>
            <Literal name="PREDICTION"
                  literalVal="9"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.PREDICTION.desc"
                  deprecated="true"/>
            <Literal name="RATE"
                  literalVal="10"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.RATE.desc"
                  deprecated="true"/>
            <Literal name="P-CLASS"
                  literalVal="11"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.P-CLASS.desc"/>
            <Literal name="M-CLASS"
                  literalVal="12"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.M-CLASS.desc"/>
            <Literal name="DIFF"
                  literalVal="13"
                  descID="IEC61850_7_4.DOEnums::CalcMethodKind.DIFF.desc"/>
         </Enumeration>
         <Enumeration name="CalcModeKind"
                   titleID="IEC61850_7_4.DOEnums::CalcModeKind.cl.title">
            <Literal name="TOTAL"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::CalcModeKind.TOTAL.desc"/>
            <Literal name="PERIOD"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::CalcModeKind.PERIOD.desc"/>
            <Literal name="SLIDING"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::CalcModeKind.SLIDING.desc"/>
         </Enumeration>
         <Enumeration name="ClockSourceKind"
                   titleID="IEC61850_7_4.DOEnums::ClockSourceKind.cl.title">
            <Literal name="Unknown" literalVal="1"/>
            <Literal name="SNTP" literalVal="2"/>
            <Literal name="PTP" literalVal="3"/>
            <Literal name="IRIG-B" literalVal="4"/>
            <Literal name="Substation internal" literalVal="5"/>
         </Enumeration>
         <Enumeration name="ClockSyncKind"
                   titleID="IEC61850_7_4.DOEnums::ClockSyncKind.cl.title">
            <Literal name="InternalClock" literalVal="1"/>
            <Literal name="LocalAreaClock" literalVal="2"/>
            <Literal name="GlobalAreaClock"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::ClockSyncKind.GlobalAreaClock.desc"/>
         </Enumeration>
         <Enumeration name="ClockSyncLockingKind"
                   titleID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.cl.title">
            <Literal name="Locked"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.Locked.desc"/>
            <Literal name="Unlocked10s"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.Unlocked10s.desc"/>
            <Literal name="Unlocked100s"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.Unlocked100s.desc"/>
            <Literal name="Unlocked1000s"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.Unlocked1000s.desc"/>
            <Literal name="UnlockedMoreThan1000s"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::ClockSyncLockingKind.UnlockedMoreThan1000s.desc"/>
         </Enumeration>
         <Enumeration name="DirectionModeKind"
                   titleID="IEC61850_7_4.DOEnums::DirectionModeKind.cl.title">
            <Literal name="NonDirectional" literalVal="1"/>
            <Literal name="Forward" literalVal="2"/>
            <Literal name="Reverse" literalVal="3"/>
         </Enumeration>
         <Enumeration name="FailureDetectionKind"
                   titleID="IEC61850_7_4.DOEnums::FailureDetectionKind.cl.title">
            <Literal name="Current" literalVal="1"/>
            <Literal name="Breaker Status" literalVal="2"/>
            <Literal name="Both current and breaker status" literalVal="3"/>
            <Literal name="Other" literalVal="4"/>
         </Enumeration>
         <Enumeration name="FaultLoopKind"
                   titleID="IEC61850_7_4.DOEnums::FaultLoopKind.cl.title">
            <Literal name="PhaseAtoGround"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseAtoGround.desc"/>
            <Literal name="PhaseBtoGround"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseBtoGround.desc"/>
            <Literal name="PhaseCtoGround"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseCtoGround.desc"/>
            <Literal name="PhaseAtoB"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseAtoB.desc"/>
            <Literal name="PhaseBtoC"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseBtoC.desc"/>
            <Literal name="PhaseCtoA"
                  literalVal="6"
                  descID="IEC61850_7_4.DOEnums::FaultLoopKind.PhaseCtoA.desc"/>
            <Literal name="Others" literalVal="7"/>
         </Enumeration>
         <Enumeration name="FaultMeasuredValueTypeKind"
                   titleID="IEC61850_7_4.DOEnums::FaultMeasuredValueTypeKind.cl.title">
            <Literal name="At Start Moment" literalVal="1"/>
            <Literal name="At Trip Moment" literalVal="2"/>
            <Literal name="Peak Fault Value" literalVal="3"/>
         </Enumeration>
         <Enumeration name="FilterFunctionKind"
                   titleID="IEC61850_7_4.DOEnums::FilterFunctionKind.cl.title">
            <Literal name="Low pass" literalVal="1"/>
            <Literal name="High pass" literalVal="2"/>
            <Literal name="Bandpass" literalVal="3"/>
            <Literal name="Bandstop" literalVal="4"/>
            <Literal name="Deadband" literalVal="5"/>
         </Enumeration>
         <Enumeration name="FuseFunctionKind"
                   titleID="IEC61850_7_4.DOEnums::FuseFunctionKind.cl.title">
            <Literal name="Slow time delay"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::FuseFunctionKind.Slow_time_delay.desc"/>
            <Literal name="Fast time delay"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::FuseFunctionKind.Fast_time_delay.desc"/>
            <Literal name="Fast acting"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::FuseFunctionKind.Fast_acting.desc"/>
            <Literal name="Very fast acting"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::FuseFunctionKind.Very_fast_acting.desc"/>
            <Literal name="Not applicable / Unknown" literalVal="98"/>
            <Literal name="Other" literalVal="99"/>
         </Enumeration>
         <Enumeration name="HealthKind" titleID="IEC61850_7_4.DOEnums::HealthKind.cl.title">
            <Literal name="Ok"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::HealthKind.Ok.desc"/>
            <Literal name="Warning"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::HealthKind.Warning.desc"/>
            <Literal name="Alarm"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::HealthKind.Alarm.desc"/>
         </Enumeration>
         <Enumeration name="InstrumentTransformerMeasurementRatingKind"
                   titleID="IEC61850_7_4.DOEnums::InstrumentTransformerMeasurementRatingKind.cl.title">
            <Literal name="0.05" literalVal="1"/>
            <Literal name="0.1" literalVal="2"/>
            <Literal name="0.2" literalVal="3"/>
            <Literal name="0.2S" literalVal="4"/>
            <Literal name="0.5" literalVal="5"/>
            <Literal name="0.5S" literalVal="6"/>
            <Literal name="1" literalVal="7"/>
            <Literal name="3" literalVal="8"/>
            <Literal name="5" literalVal="9"/>
         </Enumeration>
         <Enumeration name="InstrumentTransformerProtectionRatingKind"
                   titleID="IEC61850_7_4.DOEnums::InstrumentTransformerProtectionRatingKind.cl.title">
            <Literal name="1" literalVal="1"/>
            <Literal name="2" literalVal="2"/>
            <Literal name="3" literalVal="3"/>
            <Literal name="5" literalVal="4"/>
            <Literal name="6" literalVal="5"/>
            <Literal name="10" literalVal="6"/>
         </Enumeration>
         <Enumeration name="LeapSecondKind"
                   titleID="IEC61850_7_4.DOEnums::LeapSecondKind.cl.title">
            <Literal name="Unknown" literalVal="1"/>
            <Literal name="Normal Time" literalVal="2"/>
            <Literal name="Last minute of the day has 61 seconds" literalVal="3"/>
            <Literal name="Last minute of the day has 59 seconds" literalVal="4"/>
         </Enumeration>
         <Enumeration name="LevelTriggerModeKind"
                   titleID="IEC61850_7_4.DOEnums::LevelTriggerModeKind.cl.title">
            <Literal name="Positive or Rising" literalVal="1"/>
            <Literal name="Negative or Falling" literalVal="2"/>
            <Literal name="Both" literalVal="3"/>
            <Literal name="Other" literalVal="4"/>
         </Enumeration>
         <Enumeration name="LiveDeadModeKind"
                   titleID="IEC61850_7_4.DOEnums::LiveDeadModeKind.cl.title">
            <Literal name="Dead Line, Dead Bus" literalVal="1"/>
            <Literal name="Live Line, Dead Bus" literalVal="2"/>
            <Literal name="Dead Line, Live Bus" literalVal="3"/>
            <Literal name="Dead Line, Dead Bus OR Live Line, Dead Bus" literalVal="4"/>
            <Literal name="Dead Line, Dead Bus OR Dead Line, Live Bus" literalVal="5"/>
            <Literal name="Live Line, Dead Bus OR Dead Line, Live Bus" literalVal="6"/>
            <Literal name="Dead Line, Dead Bus OR Live Line, Dead Bus OR Dead Line, Live Bus"
                  literalVal="7"/>
         </Enumeration>
         <Enumeration name="MaterialKind"
                   titleID="IEC61850_7_4.DOEnums::MaterialKind.cl.title">
            <Literal name="Air" literalVal="1"/>
            <Literal name="Water" literalVal="2"/>
            <Literal name="Steam" literalVal="3"/>
            <Literal name="Oil" literalVal="4"/>
            <Literal name="Hydrogen" literalVal="5"/>
            <Literal name="Natural gas" literalVal="6"/>
            <Literal name="Butane" literalVal="7"/>
            <Literal name="Propane" literalVal="8"/>
            <Literal name="Waste gas" literalVal="9"/>
            <Literal name="Not applicable / Unknown" literalVal="98"/>
            <Literal name="Other" literalVal="99"/>
         </Enumeration>
         <Enumeration name="MaterialStateKind"
                   titleID="IEC61850_7_4.DOEnums::MaterialStateKind.cl.title">
            <Literal name="Gaseous"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::MaterialStateKind.Gaseous.desc"/>
            <Literal name="Liquid"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::MaterialStateKind.Liquid.desc"/>
            <Literal name="Solid"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::MaterialStateKind.Solid.desc"/>
            <Literal name="Not applicable / Unknown" literalVal="98"/>
            <Literal name="Other" literalVal="99"/>
         </Enumeration>
         <Enumeration name="PFSignKind" titleID="IEC61850_7_4.DOEnums::PFSignKind.cl.title">
            <Literal name="IEC"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::PFSignKind.IEC.desc"/>
            <Literal name="EEI"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::PFSignKind.EEI.desc"/>
         </Enumeration>
         <Enumeration name="PIDAlgorithmKind"
                   titleID="IEC61850_7_4.DOEnums::PIDAlgorithmKind.cl.title">
            <Literal name="P" literalVal="1"/>
            <Literal name="I" literalVal="2"/>
            <Literal name="D" literalVal="3"/>
            <Literal name="PI" literalVal="4"/>
            <Literal name="PD" literalVal="5"/>
            <Literal name="ID" literalVal="6"/>
            <Literal name="PID" literalVal="7"/>
         </Enumeration>
         <Enumeration name="POWSwitchingCapabilityKind"
                   titleID="IEC61850_7_4.DOEnums::POWSwitchingCapabilityKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Close" literalVal="2"/>
            <Literal name="Open" literalVal="3"/>
            <Literal name="Close and Open" literalVal="4"/>
         </Enumeration>
         <Enumeration name="ParallelCoilModeKind"
                   titleID="IEC61850_7_4.DOEnums::ParallelCoilModeKind.cl.title">
            <Literal name="Master/Slave" literalVal="1"/>
            <Literal name="Master/Slave with fixed slave position" literalVal="2"/>
            <Literal name="Master/Slave with variable slave position" literalVal="3"/>
            <Literal name="Parallel operation without communication" literalVal="4"/>
         </Enumeration>
         <Enumeration name="ParallelCtrlModeKind"
                   titleID="IEC61850_7_4.DOEnums::ParallelCtrlModeKind.cl.title">
            <Literal name="Master" literalVal="1"/>
            <Literal name="Slave" literalVal="2"/>
            <Literal name="Independent" literalVal="3"/>
         </Enumeration>
         <Enumeration name="ParallelTransfModeKind"
                   titleID="IEC61850_7_4.DOEnums::ParallelTransfModeKind.cl.title">
            <Literal name="No Mode predefined" literalVal="1"/>
            <Literal name="Master" literalVal="2"/>
            <Literal name="Follower" literalVal="3"/>
            <Literal name="Power Factor" literalVal="4"/>
            <Literal name="Negative Reactance" literalVal="5"/>
            <Literal name="Circulating Current" literalVal="6"/>
            <Literal name="Circulating Reactive Current (var balancing)" literalVal="7"/>
            <Literal name="Circulating Reactive Current by equalizing power factor"
                  literalVal="8"
                  descID="IEC61850_7_4.DOEnums::ParallelTransfModeKind.Circulating_Reactive_Current_by_equalizing_power_factor.desc"/>
         </Enumeration>
         <Enumeration name="PolarizingQuantityKind"
                   titleID="IEC61850_7_4.DOEnums::PolarizingQuantityKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Zero Sequence Current" literalVal="2"/>
            <Literal name="Zero Sequence Voltage" literalVal="3"/>
            <Literal name="Negative Sequence Voltage" literalVal="4"/>
            <Literal name="Phase to Phase Voltages"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::PolarizingQuantityKind.Phase_to_Phase_Voltages.desc"/>
            <Literal name="Phase to Ground Voltages" literalVal="6"/>
            <Literal name="Positive sequence voltage" literalVal="7"/>
         </Enumeration>
         <Enumeration name="RecordingModeKind"
                   titleID="IEC61850_7_4.DOEnums::RecordingModeKind.cl.title">
            <Literal name="Overwrite existing values" literalVal="1"/>
            <Literal name="Stop when full or saturated" literalVal="2"/>
         </Enumeration>
         <Enumeration name="RectifierControlModeKind"
                   titleID="IEC61850_7_4.DOEnums::RectifierControlModeKind.cl.title">
            <Literal name="Current" literalVal="1"/>
            <Literal name="Voltage" literalVal="2"/>
            <Literal name="Active Power" literalVal="3"/>
         </Enumeration>
         <Enumeration name="ResetCurveKind"
                   titleID="IEC61850_7_4.DOEnums::ResetCurveKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Definite Time Delayed Reset" literalVal="2"/>
            <Literal name="Inverse Reset" literalVal="3"/>
         </Enumeration>
         <Enumeration name="RestraintModeKind"
                   titleID="IEC61850_7_4.DOEnums::RestraintModeKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Harmonic2" literalVal="2"/>
            <Literal name="Harmonic5" literalVal="3"/>
            <Literal name="Harmonic2and5" literalVal="4"/>
            <Literal name="WaveformAnalysis" literalVal="5"/>
            <Literal name="WaveformAnalysisAndHarmonic2" literalVal="6"/>
            <Literal name="Other" literalVal="7"/>
            <Literal name="WaveformAnalysisAndHarmonic5" literalVal="8"/>
            <Literal name="WaveformAnalysisAndHarmonic2AndHarmonic5" literalVal="9"/>
         </Enumeration>
         <Enumeration name="RetripModeKind"
                   titleID="IEC61850_7_4.DOEnums::RetripModeKind.cl.title">
            <Literal name="Off" literalVal="1"/>
            <Literal name="Without Check" literalVal="2"/>
            <Literal name="With Current Check" literalVal="3"/>
            <Literal name="With Breaker Status Check" literalVal="4"/>
            <Literal name="With Current and Breaker Status Check" literalVal="5"/>
            <Literal name="Other Checks" literalVal="6"/>
         </Enumeration>
         <Enumeration name="RotatingMachineStateKind"
                   titleID="IEC61850_7_4.DOEnums::RotatingMachineStateKind.cl.title">
            <Literal name="Stopped"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::RotatingMachineStateKind.Stopped.desc"/>
            <Literal name="Stopping" literalVal="2"/>
            <Literal name="Started"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::RotatingMachineStateKind.Started.desc"/>
            <Literal name="Starting" literalVal="4"/>
            <Literal name="Disabled" literalVal="5"/>
         </Enumeration>
         <Enumeration name="RotationalDirectionKind"
                   titleID="IEC61850_7_4.DOEnums::RotationalDirectionKind.cl.title">
            <Literal name="Clockwise" literalVal="1"/>
            <Literal name="Counter-Clockwise" literalVal="2"/>
            <Literal name="Unknown" literalVal="3"/>
         </Enumeration>
         <Enumeration name="RotorThermalStateKind"
                   titleID="IEC61850_7_4.DOEnums::RotorThermalStateKind.cl.title">
            <Literal name="Cold" literalVal="1"/>
            <Literal name="Warm" literalVal="2"/>
            <Literal name="Overload" literalVal="3"/>
         </Enumeration>
         <Enumeration name="SOFEnablingModeKind"
                   titleID="IEC61850_7_4.DOEnums::SOFEnablingModeKind.cl.title">
            <Literal name="SwitchCommand"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::SOFEnablingModeKind.SwitchCommand.desc"/>
            <Literal name="BreakerClosed"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::SOFEnablingModeKind.BreakerClosed.desc"/>
            <Literal name="VoltageAndCurrentLevel"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::SOFEnablingModeKind.VoltageAndCurrentLevel.desc"/>
         </Enumeration>
         <Enumeration name="SOFOperationModeKind"
                   titleID="IEC61850_7_4.DOEnums::SOFOperationModeKind.cl.title">
            <Literal name="ExternalSignal"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::SOFOperationModeKind.ExternalSignal.desc"/>
            <Literal name="VoltageAndCurrent"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::SOFOperationModeKind.VoltageAndCurrent.desc"/>
            <Literal name="ExternalSignal or VoltageAndCurrent" literalVal="3"/>
         </Enumeration>
         <Enumeration name="STotalCalcMethodKind"
                   titleID="IEC61850_7_4.DOEnums::STotalCalcMethodKind.cl.title">
            <Literal name="Vector" literalVal="1"/>
            <Literal name="Arithmetic" literalVal="2"/>
         </Enumeration>
         <Enumeration name="ScheduleEnablingErrorKind"
                   titleID="IEC61850_7_4.DOEnums::ScheduleEnablingErrorKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Missing valid NumEntr" literalVal="2"/>
            <Literal name="Missing valid SchdIntv" literalVal="3"/>
            <Literal name="Missing valid schedule values" literalVal="4"/>
            <Literal name="Inconsistent values CDC"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::ScheduleEnablingErrorKind.Inconsistent_values_CDC.desc"/>
            <Literal name="Missing valid StrTm"
                  literalVal="6"
                  descID="IEC61850_7_4.DOEnums::ScheduleEnablingErrorKind.Missing_valid_StrTm.desc"/>
            <Literal name="Other" literalVal="99"/>
         </Enumeration>
         <Enumeration name="ScheduleStateKind"
                   titleID="IEC61850_7_4.DOEnums::ScheduleStateKind.cl.title">
            <Literal name="Not ready" literalVal="1"/>
            <Literal name="Start Time required" literalVal="2"/>
            <Literal name="Ready" literalVal="3"/>
            <Literal name="Running" literalVal="4"/>
         </Enumeration>
         <Enumeration name="SetpointEndKind"
                   titleID="IEC61850_7_4.DOEnums::SetpointEndKind.cl.title">
            <Literal name="Ended normally" literalVal="1"/>
            <Literal name="Ended with overshoot" literalVal="2"/>
            <Literal name="Cancelled: measurement was deviating" literalVal="3"/>
            <Literal name="Cancelled: loss of communication with dispatch centre"
                  literalVal="4"/>
            <Literal name="Cancelled: loss of communication with local area network"
                  literalVal="5"/>
            <Literal name="Cancelled: loss of communication with the local interface"
                  literalVal="6"/>
            <Literal name="Cancelled: timeout" literalVal="7"/>
            <Literal name="Cancelled: voluntarily" literalVal="8"/>
            <Literal name="Cancelled: noisy environments" literalVal="9"/>
            <Literal name="Cancelled: material failure" literalVal="10"/>
            <Literal name="Cancelled: new set-point request" literalVal="11"/>
            <Literal name="Cancelled: improper environment (blockage)" literalVal="12"/>
            <Literal name="Cancelled: stability time was reached" literalVal="13"/>
            <Literal name="Cancelled: immobilisation time was reached" literalVal="14"/>
            <Literal name="Cancelled: equipment was in the wrong mode" literalVal="15"/>
            <Literal name="Unknown causes" literalVal="16"/>
         </Enumeration>
         <Enumeration name="StageControlKind"
                   titleID="IEC61850_7_4.DOEnums::StageControlKind.cl.title">
            <Literal name="Inactive" literalVal="1"/>
            <Literal name="Stage1" literalVal="2"/>
            <Literal name="Stage2" literalVal="3"/>
            <Literal name="Stage3" literalVal="4"/>
         </Enumeration>
         <Enumeration name="StrWeekDayKind"
                   titleID="IEC61850_7_4.DOEnums::StrWeekDayKind.cl.title">
            <Literal name="Monday"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Monday.desc"/>
            <Literal name="Tuesday"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Tuesday.desc"/>
            <Literal name="Wednesday"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Wednesday.desc"/>
            <Literal name="Thursday"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Thursday.desc"/>
            <Literal name="Friday"
                  literalVal="5"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Friday.desc"/>
            <Literal name="Saturday"
                  literalVal="6"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Saturday.desc"/>
            <Literal name="Sunday"
                  literalVal="7"
                  descID="IEC61850_7_4.DOEnums::StrWeekDayKind.Sunday.desc"/>
         </Enumeration>
         <Enumeration name="SwitchFunctionKind"
                   titleID="IEC61850_7_4.DOEnums::SwitchFunctionKind.cl.title">
            <Literal name="Load Break" literalVal="1"/>
            <Literal name="Disconnector" literalVal="2"/>
            <Literal name="Earthing Switch" literalVal="3"/>
            <Literal name="High Speed Earthing Switch" literalVal="4"/>
         </Enumeration>
         <Enumeration name="SwitchingCapabilityKind"
                   titleID="IEC61850_7_4.DOEnums::SwitchingCapabilityKind.cl.title">
            <Literal name="None" literalVal="1"/>
            <Literal name="Open" literalVal="2"/>
            <Literal name="Close" literalVal="3"/>
            <Literal name="Open and Close" literalVal="4"/>
         </Enumeration>
         <Enumeration name="SynchOperationModeKind"
                   titleID="IEC61850_7_4.DOEnums::SynchOperationModeKind.cl.title">
            <Literal name="Automatic-synchronizing"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::SynchOperationModeKind.Automatic-synchronizing.desc"/>
            <Literal name="Automatic-paralleling"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::SynchOperationModeKind.Automatic-paralleling.desc"/>
            <Literal name="Manual"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::SynchOperationModeKind.Manual.desc"/>
            <Literal name="Test"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::SynchOperationModeKind.Test.desc"/>
         </Enumeration>
         <Enumeration name="TankFillKind"
                   titleID="IEC61850_7_4.DOEnums::TankFillKind.cl.title">
            <Literal name="pressure only" literalVal="1"/>
            <Literal name="level only" literalVal="2"/>
            <Literal name="both pressure and level" literalVal="3"/>
         </Enumeration>
         <Enumeration name="TransientPerformanceClassKind"
                   titleID="IEC61850_7_4.DOEnums::TransientPerformanceClassKind.cl.title">
            <Literal name="Unknown" literalVal="1"/>
            <Literal name="P" literalVal="2"/>
            <Literal name="PR" literalVal="3"/>
            <Literal name="PX" literalVal="4"/>
            <Literal name="PXR" literalVal="5"/>
            <Literal name="TPX" literalVal="6"/>
            <Literal name="TPY" literalVal="7"/>
            <Literal name="TPZ" literalVal="8"/>
            <Literal name="TPE" literalVal="9"/>
            <Literal name="TPS" literalVal="10"/>
         </Enumeration>
         <Enumeration name="TpcAppModeKind"
                   titleID="IEC61850_7_4.DOEnums::TpcAppModeKind.cl.title">
            <Literal name="Unused" literalVal="1"/>
            <Literal name="Blocking" literalVal="2"/>
            <Literal name="Permissive" literalVal="3"/>
            <Literal name="Direct" literalVal="4"/>
            <Literal name="Unblocking" literalVal="5"/>
            <Literal name="Status" literalVal="6"/>
         </Enumeration>
         <Enumeration name="TriggerSourceKind"
                   titleID="IEC61850_7_4.DOEnums::TriggerSourceKind.cl.title">
            <Literal name="Internal" literalVal="1"/>
            <Literal name="External" literalVal="2"/>
            <Literal name="Both" literalVal="3"/>
         </Enumeration>
         <Enumeration name="TripBehaviourKind"
                   titleID="IEC61850_7_4.DOEnums::TripBehaviourKind.cl.title">
            <Literal name="Single Pole Tripping" literalVal="1"/>
            <Literal name="Undefined" literalVal="2"/>
            <Literal name="Three Pole Tripping" literalVal="3"/>
         </Enumeration>
         <Enumeration name="TripModeKind"
                   titleID="IEC61850_7_4.DOEnums::TripModeKind.cl.title">
            <Literal name="3 phase tripping"
                  literalVal="1"
                  descID="IEC61850_7_4.DOEnums::TripModeKind.3_phase_tripping.desc"/>
            <Literal name="1 or 3 phase tripping"
                  literalVal="2"
                  descID="IEC61850_7_4.DOEnums::TripModeKind.1_or_3_phase_tripping.desc"/>
            <Literal name="specific"
                  literalVal="3"
                  descID="IEC61850_7_4.DOEnums::TripModeKind.specific.desc"/>
            <Literal name="1 phase tripping"
                  literalVal="4"
                  descID="IEC61850_7_4.DOEnums::TripModeKind.1_phase_tripping.desc"/>
         </Enumeration>
         <Enumeration name="TuningKind" titleID="IEC61850_7_4.DOEnums::TuningKind.cl.title">
            <Literal name="Not tuned" literalVal="1"/>
            <Literal name="Tuned" literalVal="2"/>
            <Literal name="Tuned but not compensated" literalVal="3"/>
            <Literal name="Umax" literalVal="4"/>
            <Literal name="Umax but not compensated" literalVal="5"/>
            <Literal name="Umax but not compensated due to U continous limitation"
                  literalVal="6"/>
         </Enumeration>
         <Enumeration name="UnbalanceDetectionKind"
                   titleID="IEC61850_7_4.DOEnums::UnbalanceDetectionKind.cl.title">
            <Literal name="Negative sequence" literalVal="1"/>
            <Literal name="Zero sequence" literalVal="2"/>
            <Literal name="Neg-pos sequence" literalVal="3"/>
            <Literal name="Zero-pos sequence" literalVal="4"/>
            <Literal name="Phase vector comparison" literalVal="5"/>
            <Literal name="Others" literalVal="6"/>
         </Enumeration>
         <Enumeration name="UnblockModeKind"
                   titleID="IEC61850_7_4.DOEnums::UnblockModeKind.cl.title">
            <Literal name="Off" literalVal="1"/>
            <Literal name="Permanent" literalVal="2"/>
            <Literal name="Time window" literalVal="3"/>
         </Enumeration>
         <Enumeration name="VoltInterruptDetectionKind"
                   titleID="IEC61850_7_4.DOEnums::VoltInterruptDetectionKind.cl.title">
            <Literal name="Voltage" literalVal="1"/>
            <Literal name="Voltage and Current" literalVal="2"/>
            <Literal name="Voltage and Normally Open breaker contact" literalVal="3"/>
            <Literal name="Voltage and Normally Closed breaker contact" literalVal="4"/>
            <Literal name="Voltage and Normally Open and Normally Closed breaker contacts"
                  literalVal="5"/>
            <Literal name="Normally Open breaker contact" literalVal="6"/>
            <Literal name="Normally Closed breaker contact" literalVal="7"/>
            <Literal name="Both Normally Open and Normally Closed breaker contacts"
                  literalVal="8"/>
         </Enumeration>
         <Enumeration name="WeakEndInfeedModeKind"
                   titleID="IEC61850_7_4.DOEnums::WeakEndInfeedModeKind.cl.title">
            <Literal name="Off" literalVal="1"/>
            <Literal name="Operate" literalVal="2"/>
            <Literal name="Echo" literalVal="3"/>
            <Literal name="Echo and Operate" literalVal="4"/>
         </Enumeration>
      </Enumerations>
   <LNClasses>
         <AbstractLNClass name="DomainLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::DomainLN.cl.title">
            <DataObject name="NamPlt"
                     type="LPL"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.NamPlt.desc"
                     presCond="MONamPlt"
                     presCondArgsID="IEC61850_7_4.AbstractLNsCommon::DomainLN__(_MONamPlt_=__((_NamPlt_))__)_.cond.AbstractLNsCommon::DomainLN.NamPlt"
                     dsPresCond="MONamPlt"
                     dsPresCondArgsID="IEC61850_7_4.AbstractLNsCommon::DomainLN__(_MONamPlt_=__((_NamPlt_))__)_.dsCond.AbstractLNsCommon::DomainLN.NamPlt"/>
            <DataObject name="Beh"
                     type="ENS"
                     underlyingType="BehaviourModeKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.Beh.desc"
                     presCond="M"
                     dsPresCond="M"/>
            <DataObject name="Health"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.Health.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Mir"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.Mir.desc"
                     presCond="MOcond"
                     presCondArgs="1"
                     presCondArgsID="IEC61850_7_4.AbstractLNsCommon::DomainLN__(_MOcond(1)_=__((_Mir_))__)_.cond.AbstractLNsCommon::DomainLN.Mir"
                     dsPresCond="MOcond"
                     dsPresCondArgs="1"
                     dsPresCondArgsID="IEC61850_7_4.AbstractLNsCommon::DomainLN__(_MOcond(1)_=__((_Mir_))__)_.dsCond.AbstractLNsCommon::DomainLN.Mir"/>
            <DataObject name="Mod"
                     type="ENC"
                     underlyingType="BehaviourModeKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.Mod.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="InRef"
                     type="ORG"
                     descID="IEC61850_7_4.AbstractLNsCommon::DomainLN.InRef.desc"
                     presCond="Omulti"
                     dsPresCond="Omulti"/>
         </AbstractLNClass>
         <AbstractLNClass name="StatisticsLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.cl.title"
                       base="DomainLN">
            <DataObject name="ClcExp"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcExp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcNxtTmms"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcNxtTmms.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcStr"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcStr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcMth"
                     type="ENG"
                     underlyingType="CalcMethodKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcMth.desc"
                     presCond="O"
                     dsPresCond="M"/>
            <DataObject name="ClcMod"
                     type="ENG"
                     underlyingType="CalcModeKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcMod.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcIntvTyp"
                     type="ENG"
                     underlyingType="CalcIntervalKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcIntvTyp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcIntvPer"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcIntvPer.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NumSubIntv"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.NumSubIntv.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcRfTyp"
                     type="ENG"
                     underlyingType="CalcIntervalKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcRfTyp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcRfPer"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcRfPer.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcSrc"
                     type="ORG"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.ClcSrc.desc"
                     presCond="F"
                     dsPresCond="M"/>
            <DataObject name="InSyn"
                     type="ORG"
                     descID="IEC61850_7_4.AbstractLNsCommon::StatisticsLN.InSyn.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="NonProcessInterfaceLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::NonProcessInterfaceLN.cl.title"
                       base="StatisticsLN">
            <DataObject name="EEName"
                     type="DPL"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessInterfaceLN.EEName.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EEHealth"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessInterfaceLN.EEHealth.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmh"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessInterfaceLN.OpTmh.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="NonProcessControllingEquipmentInterfaceLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::NonProcessControllingEquipmentInterfaceLN.cl.title"
                       base="NonProcessInterfaceLN">
            <DataObject name="Loc"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessControllingEquipmentInterfaceLN.Loc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LocKey"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessControllingEquipmentInterfaceLN.LocKey.desc"
                     presCond="OF"
                     presCondArgs="Loc"
                     dsPresCond="F"/>
            <DataObject name="LocSta"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::NonProcessControllingEquipmentInterfaceLN.LocSta.desc"
                     presCond="OF"
                     presCondArgs="Loc"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="FunctionLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::FunctionLN.cl.title"
                       base="StatisticsLN">
            <DataObject name="Blk"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::FunctionLN.Blk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkRef"
                     type="ORG"
                     descID="IEC61850_7_4.AbstractLNsCommon::FunctionLN.BlkRef.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="EquipmentInterfaceLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::EquipmentInterfaceLN.cl.title"
                       base="FunctionLN">
            <DataObject name="EEName"
                     type="DPL"
                     descID="IEC61850_7_4.AbstractLNsCommon::EquipmentInterfaceLN.EEName.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EEHealth"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::EquipmentInterfaceLN.EEHealth.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmh"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsCommon::EquipmentInterfaceLN.OpTmh.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="CmdEquipmentInterfaceLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::CmdEquipmentInterfaceLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="CmdBlk"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::CmdEquipmentInterfaceLN.CmdBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="ControllingLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::ControllingLN.cl.title"
                       base="FunctionLN">
            <DataObject name="Loc"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControllingLN.Loc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LocKey"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControllingLN.LocKey.desc"
                     presCond="OF"
                     presCondArgs="Loc"
                     dsPresCond="F"/>
            <DataObject name="LocSta"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControllingLN.LocSta.desc"
                     presCond="OF"
                     presCondArgs="Loc"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="ControlledLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::ControlledLN.cl.title"
                       base="ControllingLN">
            <DataObject name="CmdBlk"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControlledLN.CmdBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControlledLN.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="ControlEquipmentInterfaceLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::ControlEquipmentInterfaceLN.cl.title"
                       base="ControlledLN">
            <DataObject name="EEName"
                     type="DPL"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControlEquipmentInterfaceLN.EEName.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EEHealth"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControlEquipmentInterfaceLN.EEHealth.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmh"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsCommon::ControlEquipmentInterfaceLN.OpTmh.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="AutomaticControlLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::AutomaticControlLN.cl.title"
                       base="ControlledLN">
            <DataObject name="Auto"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::AutomaticControlLN.Auto.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="SynchronisationLN"
                       titleID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.cl.title"
                       base="ControlledLN">
            <DataObject name="Rel"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.Rel.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="VInd"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.VInd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AngInd"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.AngInd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzInd"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.HzInd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifVClc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifVClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DifHzClc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifHzClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DifAngClc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifAngClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="V1Clc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.V1Clc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="V2Clc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.V2Clc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Hz1Clc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.Hz1Clc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Hz2Clc"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.Hz2Clc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SynPrg"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.SynPrg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LivLivBlk"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.LivLivBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VAdpFact"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.VAdpFact.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AdpAngDeg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.AdpAngDeg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifVNg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifVNg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifVPs"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifVPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifHzNg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifHzNg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifHzPs"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifHzPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifAngNg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifAngNg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifAngPs"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DifAngPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinVSyn"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.MinVSyn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxVSyn"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.MaxVSyn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DetSyn"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DetSyn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LivDeaMod"
                     type="ENG"
                     underlyingType="LiveDeadModeKind"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.LivDeaMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DeaLinVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DeaLinVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LivLinVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.LivLinVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DeaBusVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.DeaBusVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LivBusVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.LivBusVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TotTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsCommon::SynchronisationLN.TotTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="SubscriptionSupervisionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.cl.title"
                       base="DomainLN">
            <DataObject name="NdsCom"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.NdsCom.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="St"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.St.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="SimSt"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.SimSt.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="ConfRevNum"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.ConfRevNum.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="RxConfRevNum"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsGroupL::SubscriptionSupervisionLN.RxConfRevNum.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </AbstractLNClass>
         <AbstractLNClass name="FunctionOutputLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupF::FunctionOutputLN.cl.title"
                       base="FunctionLN">
            <DataObject name="Out"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupF::FunctionOutputLN.Out.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="ThresholdLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.cl.title"
                       base="FunctionLN">
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.StrVal.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrCrv"
                     type="CSG"
                     descID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.StrCrv.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupF::ThresholdLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="EnergyLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.cl.title"
                       base="FunctionLN">
            <DataObject name="TotVAh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.TotVAh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TotWh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.TotWh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TotVArh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.TotVArh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SupWh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.SupWh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SupVArh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.SupVArh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DmdWh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.DmdWh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DmdVArh"
                     type="BCR"
                     descID="IEC61850_7_4.AbstractLNsGroupM::EnergyLN.DmdVArh.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="HarmonicsLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.cl.title"
                       base="FunctionLN">
            <DataObject name="Hz"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.Hz.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="HzSet"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.HzSet.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="F"/>
            <DataObject name="EvTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.EvTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NumCyc"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.NumCyc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ThdAVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.ThdAVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ThdVVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.ThdVVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ThdATmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.ThdATmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ThdVTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.ThdVTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NomA"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupM::HarmonicsLN.NomA.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="ProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::ProtectionLN.cl.title"
                       base="FunctionLN">
            <DataObject name="FltPhV"
                     type="WYE"
                     descID="IEC61850_7_4.AbstractLNsGroupP::ProtectionLN.FltPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FltA"
                     type="WYE"
                     descID="IEC61850_7_4.AbstractLNsGroupP::ProtectionLN.FltA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.AbstractLNsGroupP::ProtectionLN.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FltValTyp"
                     type="ENG"
                     underlyingType="FaultMeasuredValueTypeKind"
                     descID="IEC61850_7_4.AbstractLNsGroupP::ProtectionLN.FltValTyp.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="CurrentProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="TmASt"
                     type="CSD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.TmASt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="TmACrv"
                     type="CURVE"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.TmACrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmAChr"
                     type="CSG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.TmAChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
            <DataObject name="TmMult"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.TmMult.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.MinOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.MaxOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TypRsCrv"
                     type="ENG"
                     underlyingType="ResetCurveKind"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.TypRsCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::CurrentProtectionLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="EarthfaultProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::EarthfaultProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="FltIndRs"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsGroupP::EarthfaultProtectionLN.FltIndRs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GndStr"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::EarthfaultProtectionLN.GndStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DirMod"
                     type="ENG"
                     underlyingType="DirectionModeKind"
                     descID="IEC61850_7_4.AbstractLNsGroupP::EarthfaultProtectionLN.DirMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="FrequencyProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkV"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.BlkV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.BlkVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::FrequencyProtectionLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="GeneratorProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::GeneratorProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::GeneratorProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::GeneratorProtectionLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::GeneratorProtectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="MotorStartupProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::MotorStartupProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::MotorStartupProtectionLN.Op.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SetA"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::MotorStartupProtectionLN.SetA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SetTms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::MotorStartupProtectionLN.SetTms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="PowerProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="DirMod"
                     type="ENG"
                     underlyingType="DirectionModeKind"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.DirMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerProtectionLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="PowerFactorProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkA"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.BlkA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkV"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.BlkV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValA"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.BlkValA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValV"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::PowerFactorProtectionLN.BlkValV.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="VoltageProtectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.cl.title"
                       base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmMult"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.TmMult.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.MinOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.MaxOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupP::VoltageProtectionLN.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="PowerQualityLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupQ::PowerQualityLN.cl.title"
                       base="FunctionLN">
            <DataObject name="VaStr"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::PowerQualityLN.VaStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VaEnd"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::PowerQualityLN.VaEnd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EvtCnt"
                     type="HST"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::PowerQualityLN.EvtCnt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::PowerQualityLN.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="UnbalanceDetectionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupQ::UnbalanceDetectionLN.cl.title"
                       base="PowerQualityLN">
            <DataObject name="UnbDetMth"
                     type="ENG"
                     underlyingType="UnbalanceDetectionKind"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::UnbalanceDetectionLN.UnbDetMth.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupQ::UnbalanceDetectionLN.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="RecorderLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.cl.title"
                       base="FunctionLN">
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TrgMod"
                     type="ENG"
                     underlyingType="TriggerSourceKind"
                     descID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.TrgMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LevMod"
                     type="ENG"
                     underlyingType="LevelTriggerModeKind"
                     descID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.LevMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PreTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.PreTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PstTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupR::RecorderLN.PstTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="DRChannelLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupR::DRChannelLN.cl.title"
                       base="RecorderLN">
            <DataObject name="ChTrg"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupR::DRChannelLN.ChTrg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ChNum"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupR::DRChannelLN.ChNum.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="SrcRef"
                     type="ORG"
                     descID="IEC61850_7_4.AbstractLNsGroupR::DRChannelLN.SrcRef.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="SupervisionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupS::SupervisionLN.cl.title"
                       base="FunctionLN">
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SupervisionLN.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="LineSupervisionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.cl.title"
                       base="SupervisionLN">
            <DataObject name="InsAlm"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.InsAlm.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="InsBlk"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.InsBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="InsTr"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.InsTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="InsLevMax"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.InsLevMax.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="InsLevMin"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.InsLevMin.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Pres"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.Pres.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::LineSupervisionLN.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </AbstractLNClass>
         <AbstractLNClass name="SwitchgearSupervisionLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.cl.title"
                       base="SupervisionLN">
            <DataObject name="OpCntAlm"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpCntAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCntWrn"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpCntWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmAlm"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmWrn"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MechHealth"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.MechHealth.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmOpnAlm"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmOpnAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmClsAlm"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmClsAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AccmAbr"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.AccmAbr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AuxSwTmOpn"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.AuxSwTmOpn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AuxSwTmCls"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.AuxSwTmCls.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RctTmOpn"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.RctTmOpn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RctTmCls"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.RctTmCls.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpSpdOpn"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpSpdOpn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpSpdCls"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpSpdCls.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpTmOpn"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmOpn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpTmCls"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmCls.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Stk"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.Stk.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OvStkOpn"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OvStkOpn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OvStkCls"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OvStkCls.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ColA"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.ColA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpAlmTmh"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpAlmTmh.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpWrnTmh"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpWrnTmh.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpAlmNum"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpAlmNum.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpWrnNum"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpWrnNum.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmOpnSet"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmOpnSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpTmClsSet"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupS::SwitchgearSupervisionLN.OpTmClsSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="InstrumentTransformerLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.cl.title"
                       base="SensorLN">
            <DataObject name="HzRtg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.HzRtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Rat"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.Rat.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Cor"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.Cor.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN__(_MFcond(3)_=__((_Cor,_AngCor_))__)_.cond.AbstractLNsGroupT::InstrumentTransformerLN.Cor"
                     dsPresCond="F"/>
            <DataObject name="AngCor"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.AngCor.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN__(_MFcond(3)_=__((_Cor,_AngCor_))__)_.cond.AbstractLNsGroupT::InstrumentTransformerLN.AngCor"
                     dsPresCond="F"/>
            <DataObject name="CorCrv"
                     type="CSG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.CorCrv.desc"
                     presCond="MFcond"
                     presCondArgs="4"
                     presCondArgsID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN__(_MFcond(4)_=__((_CorCrv_))__)_.cond.AbstractLNsGroupT::InstrumentTransformerLN.CorCrv"
                     dsPresCond="F"/>
            <DataObject name="Clip"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.Clip.desc"
                     presCond="MOcond"
                     presCondArgs="5"
                     presCondArgsID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN__(_MOcond(5)_=__((_Clip_))__)_.cond.AbstractLNsGroupT::InstrumentTransformerLN.Clip"
                     dsPresCond="F"/>
            <DataObject name="AccMeas"
                     type="ENG"
                     underlyingType="InstrumentTransformerMeasurementRatingKind"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.AccMeas.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AccPro"
                     type="ENG"
                     underlyingType="InstrumentTransformerProtectionRatingKind"
                     descID="IEC61850_7_4.AbstractLNsGroupT::InstrumentTransformerLN.AccPro.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="SensorLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupT::SensorLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="SmpRte"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupT::SensorLN.SmpRte.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HoldTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupT::SensorLN.HoldTmms.desc"
                     presCond="MOcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.AbstractLNsGroupT::SensorLN__(_MOcond(2)_=__((_HoldTmms_))__)_.cond.AbstractLNsGroupT::SensorLN.HoldTmms"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="SwitchingEquipmentLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="Loc"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.Loc.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="LocKey"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.LocKey.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCnt"
                     type="INS"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.OpCnt.desc"
                     presCond="M"
                     dsPresCond="O"/>
            <DataObject name="Dsc"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.Dsc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LocSta"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.LocSta.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Pos"
                     type="DPC"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.Pos.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkOpn"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.BlkOpn.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkCls"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.BlkCls.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ChaMotEna"
                     type="SPC"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.ChaMotEna.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DscDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.AbstractLNsGroupX::SwitchingEquipmentLN.DscDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="BaseConverterLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupZ::BaseConverterLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="VArRtg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BaseConverterLN.VArRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BaseConverterLN.VRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="BatteryLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="BatHi"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.BatHi.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BatLo"
                     type="SPS"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.BatLo.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VolChgRte"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.VolChgRte.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Vol"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.Vol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Amp"
                     type="MV"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.Amp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HiBatVol"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.HiBatVol.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoBatVol"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::BatteryLN.LoBatVol.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <AbstractLNClass name="ConductorLN"
                       titleID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.cl.title"
                       base="EquipmentInterfaceLN">
            <DataObject name="LinLenkm"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.LinLenkm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RPs"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.RPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="XPs"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.XPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZPsMag"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZPsMag.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZPsAng"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZPsAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RZer"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.RZer.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="XZer"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.XZer.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZZerMag"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZZerMag.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZZerAng"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZZerAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RmZer"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.RmZer.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="XmZer"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.XmZer.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZmZerMag"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZmZerMag.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ZmZerAng"
                     type="ASG"
                     descID="IEC61850_7_4.AbstractLNsGroupZ::ConductorLN.ZmZerAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </AbstractLNClass>
         <LNClass name="LPHD" titleID="IEC61850_7_4.LNGroupL::LPHD.cl.title">
            <DataObject name="NamPlt"
                     type="LPL"
                     descID="IEC61850_7_4.LNGroupL::LPHD.NamPlt.desc"
                     presCond="MONamPlt"
                     presCondArgsID="IEC61850_7_4.LNGroupL::LPHD__(_MONamPlt_=__((_NamPlt_))__)_.cond.LNGroupL::LPHD.NamPlt"
                     dsPresCond="na"/>
            <DataObject name="PhyNam"
                     type="DPL"
                     descID="IEC61850_7_4.LNGroupL::LPHD.PhyNam.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="PhyHealth"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.LNGroupL::LPHD.PhyHealth.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="OutOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.OutOv.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="Proxy"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.Proxy.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="InOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.InOv.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="OpTmh"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.OpTmh.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="NumPwrUp"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.NumPwrUp.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="WrmStr"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.WrmStr.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="WacTrg"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.WacTrg.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="PwrUp"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupL::LPHD.PwrUp.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="PwrDn"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupL::LPHD.PwrDn.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="PwrSupAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LPHD.PwrSupAlm.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="RsStat"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupL::LPHD.RsStat.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="Sim"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupL::LPHD.Sim.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="MaxDl"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupL::LPHD.MaxDl.desc"
                     presCond="MOcond"
                     presCondArgs="1"
                     presCondArgsID="IEC61850_7_4.LNGroupL::LPHD__(_MOcond(1)_=__((_MaxDl_))__)_.cond.LNGroupL::LPHD.MaxDl"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LLN0"
               titleID="IEC61850_7_4.LNGroupL::LLN0.cl.title"
               canHaveLOG="true">
            <DataObject name="NamPlt"
                     type="LPL"
                     descID="IEC61850_7_4.LNGroupL::LLN0.NamPlt.desc"
                     presCond="MOrootLD"
                     dsPresCond="na"/>
            <DataObject name="Beh"
                     type="ENS"
                     underlyingType="BehaviourModeKind"
                     descID="IEC61850_7_4.LNGroupL::LLN0.Beh.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="Health"
                     type="ENS"
                     underlyingType="HealthKind"
                     descID="IEC61850_7_4.LNGroupL::LLN0.Health.desc"
                     presCond="MOrootLD"
                     dsPresCond="na"/>
            <DataObject name="LocKey"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LLN0.LocKey.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="Loc"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LLN0.Loc.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="Mod"
                     type="ENC"
                     underlyingType="BehaviourModeKind"
                     descID="IEC61850_7_4.LNGroupL::LLN0.Mod.desc"
                     presCond="MOrootLD"
                     dsPresCond="na"/>
            <DataObject name="LocSta"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupL::LLN0.LocSta.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="Diag"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupL::LLN0.Diag.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="LEDRs"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupL::LLN0.LEDRs.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="SwModKey"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupL::LLN0.SwModKey.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="InRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupL::LLN0.InRef.desc"
                     presCond="Omulti"
                     dsPresCond="na"/>
            <DataObject name="GrRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupL::LLN0.GrRef.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="MltLev"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupL::LLN0.MltLev.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LCCH"
               titleID="IEC61850_7_4.LNGroupL::LCCH.cl.title"
               base="DomainLN">
            <DataObject name="ChLiv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.ChLiv.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="RedChLiv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.RedChLiv.desc"
                     presCond="MFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupL::LCCH__(_MFcond(2)_=__((_RedChLiv_))__)_.cond.LNGroupL::LCCH.RedChLiv"
                     dsPresCond="na"/>
            <DataObject name="OutOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.OutOv.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="InOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.InOv.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="FerCh"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.FerCh.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="RedFerCh"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LCCH.RedFerCh.desc"
                     presCond="OF"
                     presCondArgs="RedChLiv"
                     dsPresCond="na"/>
            <DataObject name="RxCnt"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupL::LCCH.RxCnt.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="RedRxCnt"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupL::LCCH.RedRxCnt.desc"
                     presCond="OF"
                     presCondArgs="RedChLiv"
                     dsPresCond="na"/>
            <DataObject name="TxCnt"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupL::LCCH.TxCnt.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="ApNam"
                     type="VSG"
                     descID="IEC61850_7_4.LNGroupL::LCCH.ApNam.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="ChLivTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupL::LCCH.ChLivTms.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LGOS"
               titleID="IEC61850_7_4.LNGroupL::LGOS.cl.title"
               base="SubscriptionSupervisionLN">
            <DataObject name="LastStNum"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LGOS.LastStNum.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="GoCBRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupL::LGOS.GoCBRef.desc"
                     presCond="M"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LSVS"
               titleID="IEC61850_7_4.LNGroupL::LSVS.cl.title"
               base="SubscriptionSupervisionLN">
            <DataObject name="SvCBRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupL::LSVS.SvCBRef.desc"
                     presCond="M"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LTIM"
               titleID="IEC61850_7_4.LNGroupL::LTIM.cl.title"
               base="DomainLN">
            <DataObject name="TmDT"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LTIM.TmDT.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="Leap"
                     type="ENS"
                     underlyingType="LeapSecondKind"
                     descID="IEC61850_7_4.LNGroupL::LTIM.Leap.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="TmOfsTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupL::LTIM.TmOfsTmm.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="TmUseDT"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupL::LTIM.TmUseDT.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="TmChgDT"
                     type="TSG"
                     descID="IEC61850_7_4.LNGroupL::LTIM.TmChgDT.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="TmChgST"
                     type="TSG"
                     descID="IEC61850_7_4.LNGroupL::LTIM.TmChgST.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="StrWeekDay"
                     type="ENG"
                     underlyingType="StrWeekDayKind"
                     descID="IEC61850_7_4.LNGroupL::LTIM.StrWeekDay.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LTMS"
               titleID="IEC61850_7_4.LNGroupL::LTMS.cl.title"
               base="DomainLN">
            <DataObject name="TmAcc"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmAcc.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="TmSrc"
                     type="VSS"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmSrc.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="TmSrcTyp"
                     type="ENS"
                     underlyingType="ClockSourceKind"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmSrcTyp.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="TmSyn"
                     type="ENS"
                     underlyingType="ClockSyncKind"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmSyn.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="TmChSt"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmChSt.desc"
                     presCond="Omulti"
                     dsPresCond="na"/>
            <DataObject name="TmSynLkd"
                     type="ENS"
                     underlyingType="ClockSyncLockingKind"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmSynLkd.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="TmSrcSet"
                     type="VSG"
                     descID="IEC61850_7_4.LNGroupL::LTMS.TmSrcSet.desc"
                     presCond="Omulti"
                     dsPresCond="na"/>
            <DataObject name="HoldTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupL::LTMS.HoldTms.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="LTRK"
               titleID="IEC61850_7_4.LNGroupL::LTRK.cl.title"
               base="DomainLN">
            <DataObject name="SpcTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="BOOLEAN"
                     descID="IEC61850_7_4.LNGroupL::LTRK.SpcTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="DpcTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="BOOLEAN"
                     descID="IEC61850_7_4.LNGroupL::LTRK.DpcTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="IncTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="INT32"
                     descID="IEC61850_7_4.LNGroupL::LTRK.IncTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="EncTrk"
                     type="CTS"
                     underlyingTypeKind="ENUMERATED"
                     descID="IEC61850_7_4.LNGroupL::LTRK.EncTrk.desc"
                     presCond="Omulti"
                     dsPresCond="na"/>
            <DataObject name="ApcFTrk"
                     type="CTS"
                     underlyingTypeKind="CONSTRUCTED"
                     underlyingType="AnalogueValueCtlF"
                     descID="IEC61850_7_4.LNGroupL::LTRK.ApcFTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="ApcIntTrk"
                     type="CTS"
                     underlyingTypeKind="CONSTRUCTED"
                     underlyingType="AnalogueValueCtlInt"
                     descID="IEC61850_7_4.LNGroupL::LTRK.ApcIntTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="BscTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="Tcmd"
                     descID="IEC61850_7_4.LNGroupL::LTRK.BscTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="IscTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="INT8"
                     descID="IEC61850_7_4.LNGroupL::LTRK.IscTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="BacTrk"
                     type="CTS"
                     underlyingTypeKind="BASIC"
                     underlyingType="Tcmd"
                     descID="IEC61850_7_4.LNGroupL::LTRK.BacTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="GenTrk"
                     type="CST"
                     descID="IEC61850_7_4.LNGroupL::LTRK.GenTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="UrcbTrk"
                     type="UTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.UrcbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="BrcbTrk"
                     type="BTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.BrcbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="LocbTrk"
                     type="LTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.LocbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="GocbTrk"
                     type="GTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.GocbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="MsvcbTrk"
                     type="MTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.MsvcbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="UsvcbTrk"
                     type="NTS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.UsvcbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="SgcbTrk"
                     type="STS"
                     descID="IEC61850_7_4.LNGroupL::LTRK.SgcbTrk.desc"
                     presCond="O"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="ANCR"
               titleID="IEC61850_7_4.LNGroupA::ANCR.cl.title"
               base="AutomaticControlLN">
            <DataObject name="HiColPos"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.HiColPos.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LoColPos"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.LoColPos.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ColChgOp"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ColChgOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StFixCol"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.StFixCol.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StClcTun"
                     type="ENS"
                     underlyingType="TuningKind"
                     descID="IEC61850_7_4.LNGroupA::ANCR.StClcTun.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PotAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.PotAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.MotAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotWrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.MotWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ClcSeqWrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ClcSeqWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ColPosA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ColPosA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AResoPt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.AResoPt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AWatt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.AWatt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ADetun"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ADetun.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Damp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.Damp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CapacImb"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.CapacImb.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolResoPt"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.VolResoPt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NeutVol"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupA::ANCR.NeutVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.TapChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColTapPos"
                     type="ISC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ColTapPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColPos"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ColPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColChg"
                     type="BAC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ColChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="StrClc"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.StrClc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ParOp"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ParOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FixCol"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ANCR.FixCol.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ParColMod"
                     type="ENG"
                     underlyingType="ParallelCoilModeKind"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ParColMod.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ParMod"
                     type="ENG"
                     underlyingType="ParallelCtrlModeKind"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ParMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ADetunSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ANCR.ADetunSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BndWid"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ANCR.BndWid.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ARCO"
               titleID="IEC61850_7_4.LNGroupA::ARCO.cl.title"
               base="AutomaticControlLN">
            <DataObject name="VOvSt"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ARCO.VOvSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NeutAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ARCO.NeutAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DschBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ARCO.DschBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupA::ARCO.TapChg.desc"
                     presCond="M"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="ARIS"
               titleID="IEC61850_7_4.LNGroupA::ARIS.cl.title"
               base="AutomaticControlLN">
            <DataObject name="ZBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ARIS.ZBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmpAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ARIS.TmpAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NeutVol"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupA::ARIS.NeutVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RisTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ARIS.RisTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RisTmpClc"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ARIS.RisTmpClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="StrSeq"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupA::ARIS.StrSeq.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ATCC"
               titleID="IEC61850_7_4.LNGroupA::ATCC.cl.title"
               base="AutomaticControlLN">
            <DataObject name="HiTapPos"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.HiTapPos.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LoTapPos"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LoTapPos.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TapOpR"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapOpR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapOpL"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapOpL.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapOpStop"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapOpStop.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapOpErr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapOpErr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCBlkVLo"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LTCBlkVLo.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCBlkVHi"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LTCBlkVHi.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCBlkAHi"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LTCBlkAHi.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EndPosR"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.EndPosR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EndPosL"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.EndPosL.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ErrPar"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::ATCC.ErrPar.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CtlV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.CtlV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LodA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LodA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CircA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.CircA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhAng"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.PhAng.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HiCtlV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.HiCtlV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LoCtlV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LoCtlV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HiDmdA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupA::ATCC.HiDmdA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="TapPos"
                     type="ISC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="VolSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.VolSpt.desc"
                     presCond="AtLeastOne"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="BndCtrChg"
                     type="BAC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BndCtrChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="ParOp"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.ParOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCBlk"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LTCBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCDragRs"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LTCDragRs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRed"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupA::ATCC.VRed.desc"
                     deprecated="true"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="BndCtr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BndCtr.desc"
                     presCond="AtLeastOne"
                     presCondArgs="2"
                     dsPresCond="F"/>
            <DataObject name="BndWid"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BndWid.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CtlDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupA::ATCC.CtlDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LDCR"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LDCR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LDCX"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LDCX.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkLV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BlkLV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkRV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BlkRV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkVLo"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BlkVLo.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkVHi"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.BlkVHi.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RnbkRV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.RnbkRV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LimLodA"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LimLodA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LDC"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LDC.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ParTrfMod"
                     type="ENG"
                     underlyingType="ParallelTransfModeKind"
                     descID="IEC61850_7_4.LNGroupA::ATCC.ParTrfMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmDlChr"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TmDlChr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LDCZ"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.LDCZ.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRedVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::ATCC.VRedVal.desc"
                     deprecated="true"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapBlkR"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapBlkR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapBlkL"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupA::ATCC.TapBlkL.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="AVCO"
               titleID="IEC61850_7_4.LNGroupA::AVCO.cl.title"
               base="AutomaticControlLN">
            <DataObject name="BlkEF"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::AVCO.BlkEF.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkAOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::AVCO.BlkAOv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkVOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupA::AVCO.BlkVOv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupA::AVCO.TapChg.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupA::AVCO.VolSpt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LimAOv"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::AVCO.LimAOv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LimVOv"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupA::AVCO.LimVOv.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CALH"
               titleID="IEC61850_7_4.LNGroupC::CALH.cl.title"
               base="FunctionLN">
            <DataObject name="GrAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CALH.GrAlm.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="GrWrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CALH.GrWrn.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="GrInd"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CALH.GrInd.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="AlmLstOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CALH.AlmLstOv.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CCGR"
               titleID="IEC61850_7_4.LNGroupC::CCGR.cl.title"
               base="AutomaticControlLN">
            <DataObject name="OpTmh"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupC::CCGR.OpTmh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FanOvCur"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CCGR.FanOvCur.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PmpOvCur"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CCGR.PmpOvCur.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PmpAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CCGR.PmpAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EnvTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.EnvTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OilTmpIn"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.OilTmpIn.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="OilTmpOut"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.OilTmpOut.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="OilMotA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.OilMotA.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ClTmpIn"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.ClTmpIn.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="ClTmpOut"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.ClTmpOut.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="ClMotA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.ClMotA.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="FanFlw"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.FanFlw.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CETmpIn"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CETmpIn.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CETmpOut"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CETmpOut.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CEPres"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CEPres.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CEFlw"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CEFlw.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FanA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CCGR.FanA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CEBlk"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CEBlk.desc"
                     deprecated="true"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CECtl"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupC::CCGR.CECtl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PmpCtlGen"
                     type="ENC"
                     underlyingType="StageControlKind"
                     descID="IEC61850_7_4.LNGroupC::CCGR.PmpCtlGen.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PmpCtl"
                     type="ENC"
                     underlyingType="StageControlKind"
                     descID="IEC61850_7_4.LNGroupC::CCGR.PmpCtl.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="FanCtlGen"
                     type="ENC"
                     underlyingType="StageControlKind"
                     descID="IEC61850_7_4.LNGroupC::CCGR.FanCtlGen.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FanCtl"
                     type="ENC"
                     underlyingType="StageControlKind"
                     descID="IEC61850_7_4.LNGroupC::CCGR.FanCtl.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="OilTmpSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CCGR.OilTmpSet.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="ClTmpSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CCGR.ClTmpSet.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CILO"
               titleID="IEC61850_7_4.LNGroupC::CILO.cl.title"
               base="FunctionLN">
            <DataObject name="EnaOpn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CILO.EnaOpn.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="EnaCls"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CILO.EnaCls.desc"
                     presCond="M"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CPOW"
               titleID="IEC61850_7_4.LNGroupC::CPOW.cl.title"
               base="FunctionLN">
            <DataObject name="TmExc"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CPOW.TmExc.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrPOW"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CPOW.StrPOW.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpOpn"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupC::CPOW.OpOpn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCls"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupC::CPOW.OpCls.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Pos"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CPOW.Pos.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosA"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CPOW.PosA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosB"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CPOW.PosB.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosC"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CPOW.PosC.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CPOW.MaxDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CSWI"
               titleID="IEC61850_7_4.LNGroupC::CSWI.cl.title"
               base="ControlledLN">
            <DataObject name="OpOpn"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupC::CSWI.OpOpn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SelOpn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSWI.SelOpn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpCls"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupC::CSWI.OpCls.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SelCls"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSWI.SelCls.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Pos"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CSWI.Pos.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="PosA"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CSWI.PosA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosB"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CSWI.PosB.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosC"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupC::CSWI.PosC.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwModKey"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupC::CSWI.SwModKey.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DscDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSWI.DscDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="CSYN"
               titleID="IEC61850_7_4.LNGroupC::CSYN.cl.title"
               base="SynchronisationLN">
            <DataObject name="Cmd"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSYN.Cmd.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="RV"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSYN.RV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LV"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSYN.LV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RHz"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSYN.RHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LHz"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupC::CSYN.LHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RotDir"
                     type="ENS"
                     underlyingType="RotationalDirectionKind"
                     descID="IEC61850_7_4.LNGroupC::CSYN.RotDir.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AccClc"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CSYN.AccClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AccClcDev"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupC::CSYN.AccClcDev.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RelDeaBus"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupC::CSYN.RelDeaBus.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpModSyn"
                     type="ENC"
                     underlyingType="SynchOperationModeKind"
                     descID="IEC61850_7_4.LNGroupC::CSYN.OpModSyn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VNom"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.VNom.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzNom"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.HzNom.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.DlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MltCmd"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.MltCmd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VAdj"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.VAdj.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VChr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.VChr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VIntvTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.VIntvTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinVTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.MinVTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxVTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.MaxVTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzAdj"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.HzAdj.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzChr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.HzChr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzIntvTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.HzIntvTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinHzTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.MinHzTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxHzTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.MaxHzTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzTgtVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.HzTgtVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="KckPls"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupC::CSYN.KckPls.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DlSynTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupC::CSYN.DlSynTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FCNT"
               titleID="IEC61850_7_4.LNGroupF::FCNT.cl.title"
               base="FunctionLN">
            <DataObject name="Up"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FCNT.Up.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Dn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FCNT.Dn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CntVal"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupF::FCNT.CntVal.desc"
                     presCond="M"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="FCSD"
               titleID="IEC61850_7_4.LNGroupF::FCSD.cl.title"
               base="FunctionOutputLN">
            <DataObject name="Crv"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupF::FCSD.Crv.desc"
                     presCond="M"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FFIL"
               titleID="IEC61850_7_4.LNGroupF::FFIL.cl.title"
               base="FunctionOutputLN">
            <DataObject name="ErrTerm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FFIL.ErrTerm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FilTyp"
                     type="ENG"
                     underlyingType="FilterFunctionKind"
                     descID="IEC61850_7_4.LNGroupF::FFIL.FilTyp.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="KP"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FFIL.KP.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="KLd"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FFIL.KLd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="KLg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FFIL.KLg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tm1Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Tm1Tmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tm1LdTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Tm1LdTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tm2Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Tm2Tmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tm2LdTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Tm2LdTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tm3Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Tm3Tmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Db"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FFIL.Db.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FLIM"
               titleID="IEC61850_7_4.LNGroupF::FLIM.cl.title"
               base="FunctionOutputLN">
            <DataObject name="HiLim"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FLIM.HiLim.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoLim"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FLIM.LoLim.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HiLimSpt"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FLIM.HiLimSpt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoLimSpt"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FLIM.LoLimSpt.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FPID"
               titleID="IEC61850_7_4.LNGroupF::FPID.cl.title"
               base="FunctionOutputLN">
            <DataObject name="PAct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FPID.PAct.desc"
                     presCond="OFcond"
                     presCondArgs="1"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_OFcond(1)_=__((_PAct_))__)_.cond.LNGroupF::FPID.PAct"
                     dsPresCond="O"/>
            <DataObject name="IAct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FPID.IAct.desc"
                     presCond="OFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_OFcond(2)_=__((_IAct_))__)_.cond.LNGroupF::FPID.IAct"
                     dsPresCond="O"/>
            <DataObject name="DAct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FPID.DAct.desc"
                     presCond="OFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_OFcond(3)_=__((_DAct_))__)_.cond.LNGroupF::FPID.DAct"
                     dsPresCond="O"/>
            <DataObject name="ErrTerm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FPID.ErrTerm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PIDAlg"
                     type="ENG"
                     underlyingType="PIDAlgorithmKind"
                     descID="IEC61850_7_4.LNGroupF::FPID.PIDAlg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="KP"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.KP.desc"
                     presCond="MFcond"
                     presCondArgs="1"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(1)_=__((_KP_))__)_.cond.LNGroupF::FPID.KP"
                     dsPresCond="F"/>
            <DataObject name="KI"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.KI.desc"
                     presCond="MFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(2)_=__((_KI,_ITmms_))__)_.cond.LNGroupF::FPID.KI"
                     dsPresCond="F"/>
            <DataObject name="ITmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FPID.ITmms.desc"
                     presCond="MFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(2)_=__((_KI,_ITmms_))__)_.cond.LNGroupF::FPID.ITmms"
                     dsPresCond="F"/>
            <DataObject name="KD"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.KD.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(3)_=__((_KD,_DTmms,_DFilTmms_))__)_.cond.LNGroupF::FPID.KD"
                     dsPresCond="F"/>
            <DataObject name="DTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FPID.DTmms.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(3)_=__((_KD,_DTmms,_DFilTmms_))__)_.cond.LNGroupF::FPID.DTmms"
                     dsPresCond="F"/>
            <DataObject name="DFilTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FPID.DFilTmms.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupF::FPID__(_MFcond(3)_=__((_KD,_DTmms,_DFilTmms_))__)_.cond.LNGroupF::FPID.DFilTmms"
                     dsPresCond="F"/>
            <DataObject name="Bias"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.Bias.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ILim"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.ILim.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Drp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FPID.Drp.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FRMP"
               titleID="IEC61850_7_4.LNGroupF::FRMP.cl.title"
               base="FunctionOutputLN">
            <DataObject name="AdjSt"
                     type="ENS"
                     underlyingType="AdjustmentKind"
                     descID="IEC61850_7_4.LNGroupF::FRMP.AdjSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ErrTerm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FRMP.ErrTerm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RmpUp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FRMP.RmpUp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RmpDn"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FRMP.RmpDn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StepPs"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FRMP.StepPs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StepNg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FRMP.StepNg.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FSCC"
               titleID="IEC61850_7_4.LNGroupF::FSCC.cl.title"
               base="DomainLN">
            <DataObject name="ActSchdRef"
                     type="ORS"
                     descID="IEC61850_7_4.LNGroupF::FSCC.ActSchdRef.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="ValINS"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupF::FSCC.ValINS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ValSPS"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSCC.ValSPS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ValENS"
                     type="ENS"
                     underlyingType="EnumDA"
                     descID="IEC61850_7_4.LNGroupF::FSCC.ValENS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ValMV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FSCC.ValMV.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="CtlEnt"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupF::FSCC.CtlEnt.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="Schd"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupF::FSCC.Schd.desc"
                     presCond="Mmulti"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="FSCH"
               titleID="IEC61850_7_4.LNGroupF::FSCH.cl.title"
               base="DomainLN">
            <DataObject name="SchdSt"
                     type="ENS"
                     underlyingType="ScheduleStateKind"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdSt.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="SchdEntr"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdEntr.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="ValINS"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValINS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ValSPS"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValSPS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ValENS"
                     type="ENS"
                     underlyingType="EnumDA"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValENS.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="ActStrTm"
                     type="TCS"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ActStrTm.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="NxtStrTm"
                     type="TCS"
                     descID="IEC61850_7_4.LNGroupF::FSCH.NxtStrTm.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="SchdEnaErr"
                     type="ENS"
                     underlyingType="ScheduleEnablingErrorKind"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdEnaErr.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="ValMV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValMV.desc"
                     presCond="AtMostOne"
                     dsPresCond="na"/>
            <DataObject name="EnaReq"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupF::FSCH.EnaReq.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="DsaReq"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupF::FSCH.DsaReq.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="SchdPrio"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdPrio.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="NumEntr"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FSCH.NumEntr.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="SchdIntv"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdIntv.desc"
                     presCond="M"
                     dsPresCond="na"/>
            <DataObject name="ValASG"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValASG.desc"
                     presCond="MmultiF"
                     presCondArgs="ValMV"
                     dsPresCond="na"/>
            <DataObject name="ValING"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValING.desc"
                     presCond="MmultiF"
                     presCondArgs="ValINS"
                     dsPresCond="na"/>
            <DataObject name="ValSPG"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValSPG.desc"
                     presCond="MmultiF"
                     presCondArgs="ValSPS"
                     dsPresCond="na"/>
            <DataObject name="ValENG"
                     type="ENG"
                     underlyingType="EnumDA"
                     descID="IEC61850_7_4.LNGroupF::FSCH.ValENG.desc"
                     presCond="MmultiF"
                     presCondArgs="ValENS"
                     dsPresCond="na"/>
            <DataObject name="StrTm"
                     type="TSG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.StrTm.desc"
                     presCond="Omulti"
                     dsPresCond="na"/>
            <DataObject name="EvtTrg"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.EvtTrg.desc"
                     presCond="O"
                     dsPresCond="na"/>
            <DataObject name="InSyn"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.InSyn.desc"
                     presCond="MF"
                     presCondArgs="EvtTrg"
                     dsPresCond="na"/>
            <DataObject name="SchdReuse"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupF::FSCH.SchdReuse.desc"
                     presCond="M"
                     dsPresCond="na"/>
         </LNClass>
         <LNClass name="FSPT"
               titleID="IEC61850_7_4.LNGroupF::FSPT.cl.title"
               base="AutomaticControlLN">
            <DataObject name="SptDvAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptDvAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SptUp"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptUp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SptDn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptDn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SptDir"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptDir.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SptEndSt"
                     type="ENS"
                     underlyingType="SetpointEndKind"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptEndSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AdjSt"
                     type="ENS"
                     underlyingType="AdjustmentKind"
                     descID="IEC61850_7_4.LNGroupF::FSPT.AdjSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Out"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FSPT.Out.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SptMem"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptMem.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ErrTerm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupF::FSPT.ErrTerm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SptChg"
                     type="BAC"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptChg.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SptVal"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupF::FSPT.SptVal.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxRst"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FSPT.MaxRst.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinRst"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FSPT.MinRst.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DvAlm"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupF::FSPT.DvAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="FXOT"
               titleID="IEC61850_7_4.LNGroupF::FXOT.cl.title"
               base="ThresholdLN"/>
         <LNClass name="FXUT"
               titleID="IEC61850_7_4.LNGroupF::FXUT.cl.title"
               base="ThresholdLN"/>
         <LNClass name="GAPC"
               titleID="IEC61850_7_4.LNGroupG::GAPC.cl.title"
               base="AutomaticControlLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupG::GAPC.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupG::GAPC.Op.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GAPC.Alm.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Wrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GAPC.Wrn.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Ind"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GAPC.Ind.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="SPCSO"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupG::GAPC.SPCSO.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="DPCSO"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupG::GAPC.DPCSO.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="ISCSO"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupG::GAPC.ISCSO.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupG::GAPC.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="GGIO"
               titleID="IEC61850_7_4.LNGroupG::GGIO.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="IntIn"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupG::GGIO.IntIn.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GGIO.Alm.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Wrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GGIO.Wrn.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Ind"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupG::GGIO.Ind.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="CntVal"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupG::GGIO.CntVal.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="AnIn"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupG::GGIO.AnIn.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="AnOut"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupG::GGIO.AnOut.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="SPCSO"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupG::GGIO.SPCSO.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="DPCSO"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupG::GGIO.DPCSO.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="ISCSO"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupG::GGIO.ISCSO.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="GLOG"
               titleID="IEC61850_7_4.LNGroupG::GLOG.cl.title"
               base="FunctionLN">
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupG::GLOG.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LogTrg"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupG::GLOG.LogTrg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LogRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupG::GLOG.LogRef.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TrgRef"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupG::GLOG.TrgRef.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="GSAL"
               titleID="IEC61850_7_4.LNGroupG::GSAL.cl.title"
               base="FunctionLN">
            <DataObject name="AuthFail"
                     type="SEC"
                     descID="IEC61850_7_4.LNGroupG::GSAL.AuthFail.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="AcsCtlFail"
                     type="SEC"
                     descID="IEC61850_7_4.LNGroupG::GSAL.AcsCtlFail.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SvcViol"
                     type="SEC"
                     descID="IEC61850_7_4.LNGroupG::GSAL.SvcViol.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Ina"
                     type="SEC"
                     descID="IEC61850_7_4.LNGroupG::GSAL.Ina.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="NumCntRs"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupG::GSAL.NumCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupG::GSAL.OpCntRs.desc"
                     presCond="M"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="IARC"
               titleID="IEC61850_7_4.LNGroupI::IARC.cl.title"
               base="NonProcessInterfaceLN">
            <DataObject name="MemOv"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::IARC.MemOv.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="MemUsed"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupI::IARC.MemUsed.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NumRcd"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupI::IARC.NumRcd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="InTrg"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupI::IARC.InTrg.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="InLog"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupI::IARC.InLog.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="MaxNumRcd"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupI::IARC.MaxNumRcd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RcdMod"
                     type="ENG"
                     underlyingType="RecordingModeKind"
                     descID="IEC61850_7_4.LNGroupI::IARC.RcdMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MemFull"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupI::IARC.MemFull.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="IHMI"
               titleID="IEC61850_7_4.LNGroupI::IHMI.cl.title"
               base="NonProcessControllingEquipmentInterfaceLN"/>
         <LNClass name="ISAF"
               titleID="IEC61850_7_4.LNGroupI::ISAF.cl.title"
               base="NonProcessInterfaceLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::ISAF.Alm.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupI::ISAF.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AlmRs"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupI::ISAF.AlmRs.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ITCI"
               titleID="IEC61850_7_4.LNGroupI::ITCI.cl.title"
               base="NonProcessControllingEquipmentInterfaceLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::ITCI.Alm.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ITMI"
               titleID="IEC61850_7_4.LNGroupI::ITMI.cl.title"
               base="NonProcessInterfaceLN"/>
         <LNClass name="ITPC"
               titleID="IEC61850_7_4.LNGroupI::ITPC.cl.title"
               base="NonProcessInterfaceLN">
            <DataObject name="GrdRxCmd"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::ITPC.GrdRxCmd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LosSig"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::ITPC.LosSig.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxCmdCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TxCmdCnt.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="RxCmdCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupI::ITPC.RxCmdCnt.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="LosSyn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupI::ITPC.LosSyn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Ber"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupI::ITPC.Ber.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Fer"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupI::ITPC.Fer.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CarLev"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupI::ITPC.CarLev.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Snr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupI::ITPC.Snr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LoopTestTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupI::ITPC.LoopTestTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NumTxCmd"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupI::ITPC.NumTxCmd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NumRxCmd"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupI::ITPC.NumRxCmd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TpcTxMod"
                     type="ENG"
                     underlyingType="TpcAppModeKind"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TpcTxMod.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="TpcRxMod"
                     type="ENG"
                     underlyingType="TpcAppModeKind"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TpcRxMod.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="SecTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupI::ITPC.SecTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BstRat"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.BstRat.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxPwr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TxPwr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxCtrHz"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TxCtrHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RxCtrHz"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.RxCtrHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxBndWid"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.TxBndWid.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RxBndWid"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupI::ITPC.RxBndWid.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="KFAN"
               titleID="IEC61850_7_4.LNGroupK::KFAN.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="Spd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KFAN.Spd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCtl"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupK::KFAN.OpCtl.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="SpdSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupK::KFAN.SpdSpt.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="MinOpTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupK::KFAN.MinOpTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupK::KFAN.MaxOpTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="KFIL"
               titleID="IEC61850_7_4.LNGroupK::KFIL.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="ACAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KFIL.ACAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotPro"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KFIL.MotPro.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Flush"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KFIL.Flush.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FilAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KFIL.FilAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifPresHi"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KFIL.DifPresHi.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FlushCnt"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupK::KFIL.FlushCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCtl"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupK::KFIL.OpCtl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AlmSpt"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupK::KFIL.AlmSpt.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="KPMP"
               titleID="IEC61850_7_4.LNGroupK::KPMP.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="Spd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KPMP.Spd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCtl"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupK::KPMP.OpCtl.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="SpdSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupK::KPMP.SpdSpt.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="MinOpTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupK::KPMP.MinOpTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupK::KPMP.MaxOpTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="KTNK"
               titleID="IEC61850_7_4.LNGroupK::KTNK.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="LevPct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KTNK.LevPct.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Vlm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KTNK.Vlm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VlmCap"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupK::KTNK.VlmCap.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TnkTyp"
                     type="ENG"
                     underlyingType="TankFillKind"
                     descID="IEC61850_7_4.LNGroupK::KTNK.TnkTyp.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="KVLV"
               titleID="IEC61850_7_4.LNGroupK::KVLV.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="OpCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupK::KVLV.OpCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClsPos"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KVLV.ClsPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="OpnPos"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KVLV.OpnPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="Mvm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KVLV.Mvm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Stuck"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupK::KVLV.Stuck.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosVlv"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KVLV.PosVlv.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Flw"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupK::KVLV.Flw.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PosSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.PosSpt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Pos"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.Pos.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PosChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.PosChg.desc"
                     presCond="AtMostOne"
                     dsPresCond="O"/>
            <DataObject name="PosChgIncr"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.PosChgIncr.desc"
                     presCond="AtMostOne"
                     dsPresCond="O"/>
            <DataObject name="BlkOpn"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.BlkOpn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkCls"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupK::KVLV.BlkCls.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpnLim"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupK::KVLV.OpnLim.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ClsLim"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupK::KVLV.ClsLim.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Incr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupK::KVLV.Incr.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="MENV"
               titleID="IEC61850_7_4.LNGroupM::MENV.cl.title"
               base="FunctionLN">
            <DataObject name="SmokAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupM::MENV.SmokAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FloodAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupM::MENV.FloodAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CO2Em"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.CO2Em.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="COEm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.COEm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NOxEm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.NOxEm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SOxEm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.SOxEm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Dust"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.Dust.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Snd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.Snd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="O2CmbuGas"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.O2CmbuGas.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="O3Air"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MENV.O3Air.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SmokLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MENV.SmokLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FloodLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MENV.FloodLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="MFLK"
               titleID="IEC61850_7_4.LNGroupM::MFLK.cl.title"
               base="FunctionLN">
            <DataObject name="PPPcbLs"
                     type="HST"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPcbLs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhPcbLs"
                     type="HST"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPcbLs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PPPcbLl"
                     type="HST"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPcbLl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhPcbLl"
                     type="HST"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPcbLl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PPPst"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPst.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPst"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPst.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPlt"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPlt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPlt"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPlt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPiMax"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPiMax.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPiMax"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPiMax.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPiLoFil"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPiLoFil.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPiLoFil"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPiLoFil.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPiRoot"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPiRoot.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPiRoot"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPiRoot.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPdmWav"
                     type="HDEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPdmWav.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPdmWav"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPdmWav.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPPdmSpec"
                     type="HDEL"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PPPdmSpec.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhPdmSpec"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MFLK.PhPdmSpec.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MFLW"
               titleID="IEC61850_7_4.LNGroupM::MFLW.cl.title"
               base="FunctionLN">
            <DataObject name="VlmCnt"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupM::MFLW.VlmCnt.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="FlwRte"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwRte.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="FanSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FanSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FlwHorDir"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwHorDir.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FlwVerDir"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwVerDir.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatDen"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MatDen.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatCndct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MatCndct.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatLev"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MatLev.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FlwVlvPct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwVlvPct.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatTyp"
                     type="ENG"
                     underlyingType="MaterialKind"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MatTyp.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="MatSt"
                     type="ENG"
                     underlyingType="MaterialStateKind"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MatSt.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="FlwRteSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwRteSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinXsecArea"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MFLW.MinXsecArea.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FlwVlvTgt"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FlwVlvTgt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FanSpdSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MFLW.FanSpdSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="MHAI"
               titleID="IEC61850_7_4.LNGroupM::MHAI.cl.title"
               base="HarmonicsLN">
            <DataObject name="HA"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HPhV"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HPPV"
                     type="HDEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HW"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HW.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HVAr"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HVAr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HVA"
                     type="HWYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HVA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HRmsA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HRmsA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HRmsPhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HRmsPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HRmsPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HRmsPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HTuW"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HTuW.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HTsW"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HTsW.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HATm"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HATm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HKFact"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HKFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HTdf"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HTdf.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdOddA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdOddA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdEvnA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdEvnA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.TddA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddOddA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.TddOddA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddEvnA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.TddEvnA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdPhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdOddPhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdOddPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdEvnPhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdEvnPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdOddPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdOddPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdEvnPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.ThdEvnPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HCfPhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HCfPhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HCfPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HCfPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HCfA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HCfA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HTiFact"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MHAI.HTiFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MHAN"
               titleID="IEC61850_7_4.LNGroupM::MHAN.cl.title"
               base="HarmonicsLN">
            <DataObject name="HaAmp"
                     type="HMV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaVol"
                     type="HMV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaWatt"
                     type="HMV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaWatt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaVolAmpr"
                     type="HMV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaVolAmpr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaVolAmp"
                     type="HMV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaVolAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaRmsAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaRmsAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaRmsVol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaRmsVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaTuWatt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaTuWatt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaTsWatt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaTsWatt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaAmpTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaAmpTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaKFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaKFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaTdFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaTdFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdOddAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdOddAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdEvnAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdEvnAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.TddAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddOddAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.TddOddAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TddEvnAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.TddEvnAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdVol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdOddVol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdOddVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ThdEvnVol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.ThdEvnVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaCfAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaCfAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaCfVol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaCfVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HaTiFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHAN.HaTiFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MHET"
               titleID="IEC61850_7_4.LNGroupM::MHET.cl.title"
               base="FunctionLN">
            <DataObject name="MatVlm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHET.MatVlm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatPct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHET.MatPct.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MatCal"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHET.MatCal.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HeatOut"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHET.HeatOut.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AccmHeatOut"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHET.AccmHeatOut.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AccmHeatRs"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupM::MHET.AccmHeatRs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MatTyp"
                     type="ENG"
                     underlyingType="MaterialKind"
                     descID="IEC61850_7_4.LNGroupM::MHET.MatTyp.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="HeatSpcf"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MHET.HeatSpcf.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxMatCal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MHET.MaxMatCal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxHeatOut"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupM::MHET.MaxHeatOut.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="MHYD"
               titleID="IEC61850_7_4.LNGroupM::MHYD.cl.title"
               base="FunctionLN">
            <DataObject name="FishCnt"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupM::MHYD.FishCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Lev"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.Lev.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Flw"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.Flw.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SpdSrfc"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.SpdSrfc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Cndct"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.Cndct.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HydPH"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.HydPH.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Slnt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MHYD.Slnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MMDC"
               titleID="IEC61850_7_4.LNGroupM::MMDC.cl.title"
               base="FunctionLN">
            <DataObject name="Watt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.Watt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Amp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.Amp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Vol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.Vol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolPsGnd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.VolPsGnd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolNgGnd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.VolNgGnd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Ris"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.Ris.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RisPsGnd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.RisPsGnd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RisNgGnd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMDC.RisNgGnd.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MMET"
               titleID="IEC61850_7_4.LNGroupM::MMET.cl.title"
               base="FunctionLN">
            <DataObject name="EnvTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.EnvTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="WetBlbTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.WetBlbTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CloudCvr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.CloudCvr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="EnvHum"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.EnvHum.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DewPt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.DewPt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DffInsol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.DffInsol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DctInsol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.DctInsol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DlDur"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.DlDur.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HorInsol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.HorInsol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HorWdDir"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.HorWdDir.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HorWdSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.HorWdSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VerWdDir"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.VerWdDir.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VerWdSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.VerWdSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="WdGustSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.WdGustSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="EnvPres"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.EnvPres.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RnFll"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.RnFll.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SnwDen"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.SnwDen.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SnwTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.SnwTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SnwCvr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.SnwCvr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SnwFll"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.SnwFll.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SnwEq"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMET.SnwEq.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MMTN"
               titleID="IEC61850_7_4.LNGroupM::MMTN.cl.title"
               base="EnergyLN"/>
         <LNClass name="MMTR"
               titleID="IEC61850_7_4.LNGroupM::MMTR.cl.title"
               base="EnergyLN"/>
         <LNClass name="MMXN"
               titleID="IEC61850_7_4.LNGroupM::MMXN.cl.title"
               base="FunctionLN">
            <DataObject name="Amp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.Amp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Vol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.Vol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Watt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.Watt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolAmpr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.VolAmpr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VolAmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.VolAmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PwrFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.PwrFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Imp"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.Imp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Hz"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXN.Hz.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="MMXU"
               titleID="IEC61850_7_4.LNGroupM::MMXU.cl.title"
               base="FunctionLN">
            <DataObject name="TotW"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.TotW.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TotVAr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.TotVAr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TotVA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.TotVA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TotPF"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.TotPF.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Hz"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.Hz.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MMXU.PPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PNV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.PNV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PhV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.PhV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="A"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.A.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="W"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.W.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VAr"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.VAr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.VA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="PF"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.PF.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Z"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MMXU.Z.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvPPVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvPPVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvPhVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvPhVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvWPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvWPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvVAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvVAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvVArPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvVArPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvPFPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvPFPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AvZPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.AvZPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxPPVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxPPVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxPhVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxPhVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxWPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxWPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxVAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxVAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxVArPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxVArPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxPFPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxPFPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxZPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MaxZPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinPPVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinPPVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinPhVPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinPhVPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinWPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinWPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinVAPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinVAPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinVArPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinVArPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinPFPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinPFPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MinZPhs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.MinZPhs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HzRte"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MMXU.HzRte.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ClcTotVA"
                     type="ENG"
                     underlyingType="STotalCalcMethodKind"
                     descID="IEC61850_7_4.LNGroupM::MMXU.ClcTotVA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PFSign"
                     type="ENG"
                     underlyingType="PFSignKind"
                     descID="IEC61850_7_4.LNGroupM::MMXU.PFSign.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="MSQI"
               titleID="IEC61850_7_4.LNGroupM::MSQI.cl.title"
               base="FunctionLN">
            <DataObject name="SeqA"
                     type="SEQ"
                     descID="IEC61850_7_4.LNGroupM::MSQI.SeqA.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="SeqV"
                     type="SEQ"
                     descID="IEC61850_7_4.LNGroupM::MSQI.SeqV.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="DQ0Seq"
                     type="SEQ"
                     descID="IEC61850_7_4.LNGroupM::MSQI.DQ0Seq.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbNgA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbNgA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbNgV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbNgV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbPPV"
                     type="DEL"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbV"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbZroA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbZroA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ImbZroV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.ImbZroV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxImbA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.MaxImbA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxImbPPV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.MaxImbPPV.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxImbV"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupM::MSQI.MaxImbV.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="PDIF"
               titleID="IEC61850_7_4.LNGroupP::PDIF.cl.title"
               base="ProtectionLN">
            <DataObject name="TmASt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PDIF.TmASt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PDIF.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PDIF.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="DifAClc"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupP::PDIF.DifAClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RstA"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupP::PDIF.RstA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TmACrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PDIF.TmACrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmAChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PDIF.TmAChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
            <DataObject name="LinCapac"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIF.LinCapac.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIF.LoSet.desc"
                     presCond="AtMostOne"
                     dsPresCond="F"/>
            <DataObject name="HiSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIF.HiSet.desc"
                     presCond="AtMostOne"
                     dsPresCond="F"/>
            <DataObject name="MinOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIF.MinOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIF.MaxOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RstMod"
                     type="ENG"
                     underlyingType="RestraintModeKind"
                     descID="IEC61850_7_4.LNGroupP::PDIF.RstMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIF.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PDIR"
               titleID="IEC61850_7_4.LNGroupP::PDIR.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PDIR.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PDIR.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIR.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PDIS"
               titleID="IEC61850_7_4.LNGroupP::PDIS.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PDIS.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PDIS.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="PoRch"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PoRch.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PhStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GndStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.GndStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DirMod"
                     type="ENG"
                     underlyingType="DirectionModeKind"
                     descID="IEC61850_7_4.LNGroupP::PDIS.DirMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PctRch"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PctRch.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Ofs"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.Ofs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PctOfs"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PctOfs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RisLod"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.RisLod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AngLod"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.AngLod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmDlMod"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.TmDlMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIS.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhDlMod"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PhDlMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIS.PhDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GndDlMod"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.GndDlMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GndDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIS.GndDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="X1"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.X1.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LinAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.LinAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RisGndRch"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.RisGndRch.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RisPhRch"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.RisPhRch.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="K0Fact"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.K0Fact.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="K0FactAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PDIS.K0FactAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PDIS.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PDOP"
               titleID="IEC61850_7_4.LNGroupP::PDOP.cl.title"
               base="PowerProtectionLN"/>
         <LNClass name="PDUP"
               titleID="IEC61850_7_4.LNGroupP::PDUP.cl.title"
               base="PowerProtectionLN"/>
         <LNClass name="PFRC"
               titleID="IEC61850_7_4.LNGroupP::PFRC.cl.title"
               base="FrequencyProtectionLN"/>
         <LNClass name="PHAR"
               titleID="IEC61850_7_4.LNGroupP::PHAR.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PHAR.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="HaRst"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PHAR.HaRst.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PHAR.PhStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PhStop"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PHAR.PhStop.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PHAR.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PHAR.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PHIZ"
               titleID="IEC61850_7_4.LNGroupP::PHIZ.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="AStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.AStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.VStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HVStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.HVStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PHIZ.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PIOC"
               titleID="IEC61850_7_4.LNGroupP::PIOC.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PIOC.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PIOC.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PIOC.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PMRI"
               titleID="IEC61850_7_4.LNGroupP::PMRI.cl.title"
               base="MotorStartupProtectionLN">
            <DataObject name="StrInh"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupP::PMRI.StrInh.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrInhTmm"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupP::PMRI.StrInhTmm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxNumStr"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMRI.MaxNumStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxWrmStr"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMRI.MaxWrmStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxStrTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMRI.MaxStrTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EqTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMRI.EqTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="InhTmm"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMRI.InhTmm.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PMSS"
               titleID="IEC61850_7_4.LNGroupP::PMSS.cl.title"
               base="MotorStartupProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PMSS.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotStr"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PMSS.MotStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LokRotTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PMSS.LokRotTms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="POPF"
               titleID="IEC61850_7_4.LNGroupP::POPF.cl.title"
               base="PowerFactorProtectionLN"/>
         <LNClass name="PPAM"
               titleID="IEC61850_7_4.LNGroupP::PPAM.cl.title"
               base="GeneratorProtectionLN"/>
         <LNClass name="PRTR"
               titleID="IEC61850_7_4.LNGroupP::PRTR.cl.title"
               base="GeneratorProtectionLN"/>
         <LNClass name="PSCH"
               titleID="IEC61850_7_4.LNGroupP::PSCH.cl.title"
               base="ProtectionLN">
            <DataObject name="TxPrm"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.TxPrm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxBlk"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.TxBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TxTr"
                     type="ACT"
                     descID="IEC61850_7_4.LNGroupP::PSCH.TxTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RxPrm"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.RxPrm.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="RxBlk"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.RxBlk.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="RxTr"
                     type="ACT"
                     descID="IEC61850_7_4.LNGroupP::PSCH.RxTr.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="EchoWei"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.EchoWei.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EchoWeiOp"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSCH.EchoWeiOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RxSrc"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupP::PSCH.RxSrc.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="RxSrcTr"
                     type="ORG"
                     descID="IEC61850_7_4.LNGroupP::PSCH.RxSrcTr.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSCH.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CrdTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSCH.CrdTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DurTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSCH.DurTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="UnBlkMod"
                     type="ENG"
                     underlyingType="UnblockModeKind"
                     descID="IEC61850_7_4.LNGroupP::PSCH.UnBlkMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="UnBlkTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSCH.UnBlkTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="WeiMod"
                     type="ENG"
                     underlyingType="WeakEndInfeedModeKind"
                     descID="IEC61850_7_4.LNGroupP::PSCH.WeiMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="WeiTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSCH.WeiTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PSDE"
               titleID="IEC61850_7_4.LNGroupP::PSDE.cl.title"
               base="EarthfaultProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PSDE.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSDE.Op.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Ang"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSDE.Ang.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GndOp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSDE.GndOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSDE.StrDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSDE.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PSOF"
               titleID="IEC61850_7_4.LNGroupP::PSOF.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PSOF.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PSOF.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OpAccEx"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupP::PSOF.OpAccEx.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkRec"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupP::PSOF.BlkRec.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EnaTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSOF.EnaTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EnaMod"
                     type="ENG"
                     underlyingType="SOFEnablingModeKind"
                     descID="IEC61850_7_4.LNGroupP::PSOF.EnaMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpModSof"
                     type="ENG"
                     underlyingType="SOFOperationModeKind"
                     descID="IEC61850_7_4.LNGroupP::PSOF.OpModSof.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SetPhV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSOF.SetPhV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSOF.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSOF.BlkValV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValA"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PSOF.BlkValA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PSOF.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTDV"
               titleID="IEC61850_7_4.LNGroupP::PTDV.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PTDV.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTDV.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTDV.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTDV.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTEF"
               titleID="IEC61850_7_4.LNGroupP::PTEF.cl.title"
               base="EarthfaultProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PTEF.Str.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTEF.Op.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTHF"
               titleID="IEC61850_7_4.LNGroupP::PTHF.cl.title"
               base="GeneratorProtectionLN"/>
         <LNClass name="PTOC"
               titleID="IEC61850_7_4.LNGroupP::PTOC.cl.title"
               base="CurrentProtectionLN">
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTOC.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DirMod"
                     type="ENG"
                     underlyingType="DirectionModeKind"
                     descID="IEC61850_7_4.LNGroupP::PTOC.DirMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTOF"
               titleID="IEC61850_7_4.LNGroupP::PTOF.cl.title"
               base="FrequencyProtectionLN"/>
         <LNClass name="PTOV"
               titleID="IEC61850_7_4.LNGroupP::PTOV.cl.title"
               base="VoltageProtectionLN">
            <DataObject name="TmVSt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PTOV.TmVSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTOV.Op.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmVCrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PTOV.TmVCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmVChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PTOV.TmVChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTRC"
               titleID="IEC61850_7_4.LNGroupP::PTRC.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PTRC.Str.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTRC.Op.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="Tr"
                     type="ACT"
                     descID="IEC61850_7_4.LNGroupP::PTRC.Tr.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="TrMod"
                     type="ENG"
                     underlyingType="TripModeKind"
                     descID="IEC61850_7_4.LNGroupP::PTRC.TrMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TrPlsTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTRC.TrPlsTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTTR"
               titleID="IEC61850_7_4.LNGroupP::PTTR.cl.title"
               base="ProtectionLN">
            <DataObject name="TmTmpSt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmTmpSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmASt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmASt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PTTR.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTTR.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="AlmThm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupP::PTTR.AlmThm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkThm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupP::PTTR.BlkThm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Amp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupP::PTTR.Amp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupP::PTTR.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TmpRl"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmpRl.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LodRsvAlm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupP::PTTR.LodRsvAlm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LodRsvTr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupP::PTTR.LodRsvTr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TmTmpCrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmTmpCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTmpChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmTmpChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
            <DataObject name="TmACrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmACrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmAChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmAChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
            <DataObject name="TmpMax"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.TmpMax.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTTR.MinOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTTR.MaxOpTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTTR.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTTR.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ConsTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PTTR.ConsTms.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="AlmVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.AlmVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DropoutVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTTR.DropoutVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTUC"
               titleID="IEC61850_7_4.LNGroupP::PTUC.cl.title"
               base="CurrentProtectionLN">
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PTUC.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DirMod"
                     type="ENG"
                     underlyingType="DirectionModeKind"
                     descID="IEC61850_7_4.LNGroupP::PTUC.DirMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PTUF"
               titleID="IEC61850_7_4.LNGroupP::PTUF.cl.title"
               base="FrequencyProtectionLN"/>
         <LNClass name="PTUV"
               titleID="IEC61850_7_4.LNGroupP::PTUV.cl.title"
               base="VoltageProtectionLN">
            <DataObject name="TmVSt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PTUV.TmVSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PTUV.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="TmVCrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PTUV.TmVCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmVChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PTUV.TmVChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PUPF"
               titleID="IEC61850_7_4.LNGroupP::PUPF.cl.title"
               base="PowerFactorProtectionLN"/>
         <LNClass name="PVOC"
               titleID="IEC61850_7_4.LNGroupP::PVOC.cl.title"
               base="CurrentProtectionLN">
            <DataObject name="AVSt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PVOC.AVSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AVCrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PVOC.AVCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AVChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PVOC.AVChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PVPH"
               titleID="IEC61850_7_4.LNGroupP::PVPH.cl.title"
               base="VoltageProtectionLN">
            <DataObject name="VHzSt"
                     type="CSD"
                     descID="IEC61850_7_4.LNGroupP::PVPH.VHzSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PVPH.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="VHzCrv"
                     type="CURVE"
                     descID="IEC61850_7_4.LNGroupP::PVPH.VHzCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VHzChr"
                     type="CSG"
                     descID="IEC61850_7_4.LNGroupP::PVPH.VHzChr.desc"
                     presCond="OmultiRange"
                     presCondArgs="33, 48"
                     dsPresCond="F"/>
            <DataObject name="TypRsCrv"
                     type="ENG"
                     underlyingType="ResetCurveKind"
                     descID="IEC61850_7_4.LNGroupP::PVPH.TypRsCrv.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="PZSU"
               titleID="IEC61850_7_4.LNGroupP::PZSU.cl.title"
               base="ProtectionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupP::PZSU.Str.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupP::PZSU.Op.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupP::PZSU.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PZSU.OpDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RsDlTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupP::PZSU.RsDlTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="QFVR"
               titleID="IEC61850_7_4.LNGroupQ::QFVR.cl.title"
               base="PowerQualityLN">
            <DataObject name="UnHzStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.UnHzStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OvHzStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.OvHzStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HzVaTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.HzVaTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HzVaMag"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.HzVaMag.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="UnHzStrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.UnHzStrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OvHzStrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QFVR.OvHzStrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="QITR"
               titleID="IEC61850_7_4.LNGroupQ::QITR.cl.title"
               base="PowerQualityLN">
            <DataObject name="ATrsTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QITR.ATrsTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxATrs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QITR.MaxATrs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QITR.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="QIUB"
               titleID="IEC61850_7_4.LNGroupQ::QIUB.cl.title"
               base="UnbalanceDetectionLN">
            <DataObject name="AVaTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QIUB.AVaTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxAVa"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QIUB.MaxAVa.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="QVTR"
               titleID="IEC61850_7_4.LNGroupQ::QVTR.cl.title"
               base="PowerQualityLN">
            <DataObject name="VTrsTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVTR.VTrsTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxVTrs"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVTR.MaxVTrs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="StrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QVTR.StrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="QVUB"
               titleID="IEC61850_7_4.LNGroupQ::QVUB.cl.title"
               base="UnbalanceDetectionLN">
            <DataObject name="VVaTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVUB.VVaTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxVVa"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVUB.MaxVVa.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="QVVR"
               titleID="IEC61850_7_4.LNGroupQ::QVVR.cl.title"
               base="PowerQualityLN">
            <DataObject name="DipStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.DipStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwlStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.SwlStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="IntrStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.IntrStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AffPhs"
                     type="ENS"
                     underlyingType="AffectedPhasesKind"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.AffPhs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VVa"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.VVa.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VVaTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.VVaTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DipStrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.DipStrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwlStrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.SwlStrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="IntrStrVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.IntrStrVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="IntrDetMth"
                     type="ENG"
                     underlyingType="VoltInterruptDetectionKind"
                     descID="IEC61850_7_4.LNGroupQ::QVVR.IntrDetMth.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RADR"
               titleID="IEC61850_7_4.LNGroupR::RADR.cl.title"
               base="DRChannelLN">
            <DataObject name="HiTrgLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RADR.HiTrgLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoTrgLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RADR.LoTrgLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RBDR"
               titleID="IEC61850_7_4.LNGroupR::RBDR.cl.title"
               base="DRChannelLN"/>
         <LNClass name="RBRF"
               titleID="IEC61850_7_4.LNGroupR::RBRF.cl.title"
               base="FunctionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupR::RBRF.Str.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpEx"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RBRF.OpEx.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="OpIn"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RBRF.OpIn.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupR::RBRF.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FailMod"
                     type="ENG"
                     underlyingType="FailureDetectionKind"
                     descID="IEC61850_7_4.LNGroupR::RBRF.FailMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FailTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RBRF.FailTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SPlTrTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RBRF.SPlTrTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TPTrTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RBRF.TPTrTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DetValA"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RBRF.DetValA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ReTrMod"
                     type="ENG"
                     underlyingType="RetripModeKind"
                     descID="IEC61850_7_4.LNGroupR::RBRF.ReTrMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RDIR"
               titleID="IEC61850_7_4.LNGroupR::RDIR.cl.title"
               base="FunctionLN">
            <DataObject name="Dir"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupR::RDIR.Dir.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ChrAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.ChrAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinFwdAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.MinFwdAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinRvAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.MinRvAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxFwdAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.MaxFwdAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxRvAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.MaxRvAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValA"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.BlkValA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkValV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.BlkValV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PolQty"
                     type="ENG"
                     underlyingType="PolarizingQuantityKind"
                     descID="IEC61850_7_4.LNGroupR::RDIR.PolQty.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MinPPV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RDIR.MinPPV.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RDRE"
               titleID="IEC61850_7_4.LNGroupR::RDRE.cl.title"
               base="RecorderLN">
            <DataObject name="RcdMade"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RDRE.RcdMade.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="FltNum"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RDRE.FltNum.desc"
                     presCond="M"
                     dsPresCond="O"/>
            <DataObject name="GriFltNum"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RDRE.GriFltNum.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RcdStr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupR::RDRE.RcdStr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MemUsed"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RDRE.MemUsed.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RcdTrg"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RDRE.RcdTrg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MemRs"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RDRE.MemRs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MemClr"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RDRE.MemClr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MemFull"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RDRE.MemFull.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxNumRcd"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RDRE.MaxNumRcd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ReTrgMod"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupR::RDRE.ReTrgMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PerTrgTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RDRE.PerTrgTms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ExclTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RDRE.ExclTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RcdMod"
                     type="ENG"
                     underlyingType="RecordingModeKind"
                     descID="IEC61850_7_4.LNGroupR::RDRE.RcdMod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="StoRte"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RDRE.StoRte.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RDRS"
               titleID="IEC61850_7_4.LNGroupR::RDRS.cl.title"
               base="FunctionLN">
            <DataObject name="AutoUpLod"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupR::RDRS.AutoUpLod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DltRcd"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RDRS.DltRcd.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RFLO"
               titleID="IEC61850_7_4.LNGroupR::RFLO.cl.title"
               base="FunctionLN">
            <DataObject name="FltLoop"
                     type="ENS"
                     underlyingType="FaultLoopKind"
                     descID="IEC61850_7_4.LNGroupR::RFLO.FltLoop.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FltZ"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupR::RFLO.FltZ.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FltDiskm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupR::RFLO.FltDiskm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupR::RFLO.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="RMXU"
               titleID="IEC61850_7_4.LNGroupR::RMXU.cl.title"
               base="FunctionLN">
            <DataObject name="ALoc"
                     type="WYE"
                     descID="IEC61850_7_4.LNGroupR::RMXU.ALoc.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="AmpLocPhsA"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupR::RMXU.AmpLocPhsA.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="AmpLocPhsB"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupR::RMXU.AmpLocPhsB.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="AmpLocPhsC"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupR::RMXU.AmpLocPhsC.desc"
                     presCond="AllOnlyOneGroup"
                     presCondArgs="2"
                     dsPresCond="O"/>
            <DataObject name="AmpLocRes"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupR::RMXU.AmpLocRes.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="RPSB"
               titleID="IEC61850_7_4.LNGroupR::RPSB.cl.title"
               base="FunctionLN">
            <DataObject name="Str"
                     type="ACD"
                     descID="IEC61850_7_4.LNGroupR::RPSB.Str.desc"
                     presCond="MOcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupR::RPSB__(_MOcond(2)_=__((_Str,_BlkZn_))__)_.cond.LNGroupR::RPSB.Str"
                     dsPresCond="F"/>
            <DataObject name="Op"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RPSB.Op.desc"
                     presCond="MOcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupR::RPSB__(_MOcond(3)_=__((_Op_))__)_.cond.LNGroupR::RPSB.Op"
                     dsPresCond="F"/>
            <DataObject name="BlkZn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupR::RPSB.BlkZn.desc"
                     presCond="MOcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupR::RPSB__(_MOcond(2)_=__((_Str,_BlkZn_))__)_.cond.LNGroupR::RPSB.BlkZn"
                     dsPresCond="F"/>
            <DataObject name="OpCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupR::RPSB.OpCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ZeroEna"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.ZeroEna.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="NgEna"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.NgEna.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxEna"
                     type="SPG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.MaxEna.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwgVal"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.SwgVal.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwgRis"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.SwgRis.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwgReact"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RPSB.SwgReact.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwgTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RPSB.SwgTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="UnBlkTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RPSB.UnBlkTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxNumSlp"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RPSB.MaxNumSlp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EvTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RPSB.EvTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RREC"
               titleID="IEC61850_7_4.LNGroupR::RREC.cl.title"
               base="FunctionLN">
            <DataObject name="TrBeh"
                     type="ENS"
                     underlyingType="TripBehaviourKind"
                     descID="IEC61850_7_4.LNGroupR::RREC.TrBeh.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RecCyc"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RREC.RecCyc.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpCls"
                     type="ACT"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupR::RREC.OpCls.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="AutoRecSt"
                     type="ENS"
                     underlyingType="AutoReclosingKind"
                     descID="IEC61850_7_4.LNGroupR::RREC.AutoRecSt.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Rec1PhCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RREC.Rec1PhCnt.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="Rec3PhCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupR::RREC.Rec3PhCnt.desc"
                     presCond="Omulti"
                     dsPresCond="O"/>
            <DataObject name="CycTrMod"
                     type="ENG"
                     underlyingType="TripModeKind"
                     descID="IEC61850_7_4.LNGroupR::RREC.CycTrMod.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="MaxCyc"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.MaxCyc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="UseCyc"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.UseCyc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.MaxTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Rec1Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.Rec1Tmms.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Rec13Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.Rec13Tmms.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="Rec3Tmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.Rec3Tmms.desc"
                     presCond="Omulti"
                     dsPresCond="F"/>
            <DataObject name="RclTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.RclTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RdyTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupR::RREC.RdyTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="RSYN"
               titleID="IEC61850_7_4.LNGroupR::RSYN.cl.title"
               base="SynchronisationLN">
            <DataObject name="DifV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RSYN.DifV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifHz"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RSYN.DifHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DifAng"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupR::RSYN.DifAng.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SARC"
               titleID="IEC61850_7_4.LNGroupS::SARC.cl.title"
               base="SupervisionLN">
            <DataObject name="FADet"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SARC.FADet.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SwArcDet"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SARC.SwArcDet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FACntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupS::SARC.FACntRs.desc"
                     presCond="M"
                     dsPresCond="O"/>
            <DataObject name="ArcCntRs"
                     type="INC"
                     descID="IEC61850_7_4.LNGroupS::SARC.ArcCntRs.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="SCBR"
               titleID="IEC61850_7_4.LNGroupS::SCBR.cl.title"
               base="SwitchgearSupervisionLN">
            <DataObject name="ColOpn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SCBR.ColOpn.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ColAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SCBR.ColAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AbrAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SCBR.AbrAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AbrWrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SCBR.AbrWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SwA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SCBR.SwA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ActAbr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SCBR.ActAbr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AbrAlmLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SCBR.AbrAlmLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AbrWrnLev"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SCBR.AbrWrnLev.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SIMG"
               titleID="IEC61850_7_4.LNGroupS::SIMG.cl.title"
               base="LineSupervisionLN">
            <DataObject name="PresAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIMG.PresAlm.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="DenAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIMG.DenAlm.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="TmpAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIMG.TmpAlm.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="InsBlkTmh"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupS::SIMG.InsBlkTmh.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Den"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIMG.Den.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="SIML"
               titleID="IEC61850_7_4.LNGroupS::SIML.cl.title"
               base="LineSupervisionLN">
            <DataObject name="TmpAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.TmpAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GasInsAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.GasInsAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GasInsTr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.GasInsTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GasFlwTr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.GasFlwTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="H2Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2Alm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="H2Wrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2Wrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MstAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.MstAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MstWrn"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SIML.MstWrn.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Lev"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.Lev.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="H2O"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2O.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="H2OPap"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2OPap.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="H2OAir"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2OAir.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="H2OTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2OTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="H2ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.H2ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="N2ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.N2ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="COppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.COppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CO2ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.CO2ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CH4ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.CH4ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="C2H2ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.C2H2ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="C2H4ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.C2H4ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="C2H6ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.C2H6ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="O2ppm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.O2ppm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CmbuGas"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.CmbuGas.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="FltGas"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SIML.FltGas.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="SLTC"
               titleID="IEC61850_7_4.LNGroupS::SLTC.cl.title"
               base="SupervisionLN">
            <DataObject name="OilFil"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SLTC.OilFil.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotDrvBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SLTC.MotDrvBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VacCelAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SLTC.VacCelAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OilFilTr"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SLTC.OilFilTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Torq"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SLTC.Torq.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MotDrvA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SLTC.MotDrvA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AbrPrt"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SLTC.AbrPrt.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="SOPM"
               titleID="IEC61850_7_4.LNGroupS::SOPM.cl.title"
               base="SupervisionLN">
            <DataObject name="MotOp"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotStrAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotStrAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HyAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.HyAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HyBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.HyBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EnBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.EnBlk.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EnAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.EnAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HeatAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.HeatAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ChaIntvTms"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.ChaIntvTms.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MotStrNum"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotStrNum.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="En"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.En.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HyPres"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.HyPres.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HyTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.HyTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MotTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MotA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SOPM.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MotAlmTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotAlmTms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotAlmNum"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotAlmNum.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotStrTms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupS::SOPM.MotStrTms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SPDC"
               titleID="IEC61850_7_4.LNGroupS::SPDC.cl.title"
               base="SupervisionLN">
            <DataObject name="PaDschAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPDC.PaDschAlm.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="F"/>
            <DataObject name="OpCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupS::SPDC.OpCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AcuPaDsch"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPDC.AcuPaDsch.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="AppPaDsch"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPDC.AppPaDsch.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="NQS"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPDC.NQS.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="UhfPaDsch"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPDC.UhfPaDsch.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="CtrHz"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPDC.CtrHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BndWid"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPDC.BndWid.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SPRS"
               titleID="IEC61850_7_4.LNGroupS::SPRS.cl.title"
               base="SupervisionLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPRS.Alm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPRS.RteAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Trip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPRS.Trip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteTrip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPRS.RteTrip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Pres"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPRS.Pres.desc"
                     presCond="M"
                     dsPresCond="O"/>
            <DataObject name="PresRte"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPRS.PresRte.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPRS.AlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteAlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPRS.RteAlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPRS.TripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteTripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SPRS.RteTripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SPTR"
               titleID="IEC61850_7_4.LNGroupS::SPTR.cl.title"
               base="SupervisionLN">
            <DataObject name="HPTmpAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPTR.HPTmpAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HPTmpOp"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPTR.HPTmpOp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HPTmpTr"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupS::SPTR.HPTmpTr.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MbrAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPTR.MbrAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="CGAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPTR.CGAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="HeatAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SPTR.HeatAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AgeRte"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPTR.AgeRte.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="BotTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPTR.BotTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CoreTmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPTR.CoreTmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HPTmpClc"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SPTR.HPTmpClc.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="SSWI"
               titleID="IEC61850_7_4.LNGroupS::SSWI.cl.title"
               base="SwitchgearSupervisionLN"/>
         <LNClass name="STMP"
               titleID="IEC61850_7_4.LNGroupS::STMP.cl.title"
               base="SupervisionLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::STMP.Alm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::STMP.RteAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Trip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::STMP.Trip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteTrip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::STMP.RteTrip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Tmp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::STMP.Tmp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TmpRte"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::STMP.TmpRte.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::STMP.AlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteAlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::STMP.RteAlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::STMP.TripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RteTripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::STMP.RteTripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="SVBR"
               titleID="IEC61850_7_4.LNGroupS::SVBR.cl.title"
               base="SupervisionLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SVBR.Alm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AxDspAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SVBR.AxDspAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Trip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SVBR.Trip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AxDspTrip"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupS::SVBR.AxDspTrip.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Vbr"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SVBR.Vbr.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VbrPer"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SVBR.VbrPer.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AxDsp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupS::SVBR.AxDsp.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VbrAlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SVBR.VbrAlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AxDspAlmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SVBR.AxDspAlmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VbrTripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SVBR.VbrTripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AxDspTripSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupS::SVBR.AxDspTripSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="TANG"
               titleID="IEC61850_7_4.LNGroupT::TANG.cl.title"
               base="SensorLN">
            <DataObject name="AngSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TANG.AngSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TAXD"
               titleID="IEC61850_7_4.LNGroupT::TAXD.cl.title"
               base="SensorLN">
            <DataObject name="AxDspSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TAXD.AxDspSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TCTR"
               titleID="IEC61850_7_4.LNGroupT::TCTR.cl.title"
               base="InstrumentTransformerLN">
            <DataObject name="AmpSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TCTR.AmpSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupT::TCTR.ARtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Trp"
                     type="ENG"
                     underlyingType="TransientPerformanceClassKind"
                     descID="IEC61850_7_4.LNGroupT::TCTR.Trp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ScndTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupT::TCTR.ScndTmms.desc"
                     presCond="MOcond"
                     presCondArgs="6"
                     presCondArgsID="IEC61850_7_4.LNGroupT::TCTR__(_MOcond(6)_=__((_ScndTmms_))__)_.cond.LNGroupT::TCTR.ScndTmms"
                     dsPresCond="F"/>
            <DataObject name="DynRngMin"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupT::TCTR.DynRngMin.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DynRngMax"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupT::TCTR.DynRngMax.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="TDST"
               titleID="IEC61850_7_4.LNGroupT::TDST.cl.title"
               base="SensorLN">
            <DataObject name="DisSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TDST.DisSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TFLW"
               titleID="IEC61850_7_4.LNGroupT::TFLW.cl.title"
               base="SensorLN">
            <DataObject name="FlwSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TFLW.FlwSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TFRQ"
               titleID="IEC61850_7_4.LNGroupT::TFRQ.cl.title"
               base="SensorLN">
            <DataObject name="HzSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TFRQ.HzSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TGSN"
               titleID="IEC61850_7_4.LNGroupT::TGSN.cl.title"
               base="SensorLN">
            <DataObject name="GenSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TGSN.GenSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="THUM"
               titleID="IEC61850_7_4.LNGroupT::THUM.cl.title"
               base="SensorLN">
            <DataObject name="HumSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::THUM.HumSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TLVL"
               titleID="IEC61850_7_4.LNGroupT::TLVL.cl.title"
               base="SensorLN">
            <DataObject name="LevPctSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TLVL.LevPctSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TMGF"
               titleID="IEC61850_7_4.LNGroupT::TMGF.cl.title"
               base="SensorLN">
            <DataObject name="MagFldSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TMGF.MagFldSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TMVM"
               titleID="IEC61850_7_4.LNGroupT::TMVM.cl.title"
               base="SensorLN">
            <DataObject name="MvmRteSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TMVM.MvmRteSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TPOS"
               titleID="IEC61850_7_4.LNGroupT::TPOS.cl.title"
               base="SensorLN">
            <DataObject name="PosPctSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TPOS.PosPctSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TPRS"
               titleID="IEC61850_7_4.LNGroupT::TPRS.cl.title"
               base="SensorLN">
            <DataObject name="PresSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TPRS.PresSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TRTN"
               titleID="IEC61850_7_4.LNGroupT::TRTN.cl.title"
               base="SensorLN">
            <DataObject name="RotSpdSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TRTN.RotSpdSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TSND"
               titleID="IEC61850_7_4.LNGroupT::TSND.cl.title"
               base="SensorLN">
            <DataObject name="SndSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TSND.SndSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TTMP"
               titleID="IEC61850_7_4.LNGroupT::TTMP.cl.title"
               base="SensorLN">
            <DataObject name="TmpSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TTMP.TmpSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TTNS"
               titleID="IEC61850_7_4.LNGroupT::TTNS.cl.title"
               base="SensorLN">
            <DataObject name="TnsSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TTNS.TnsSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TVBR"
               titleID="IEC61850_7_4.LNGroupT::TVBR.cl.title"
               base="SensorLN">
            <DataObject name="VbrSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TVBR.VbrSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="TVTR"
               titleID="IEC61850_7_4.LNGroupT::TVTR.cl.title"
               base="InstrumentTransformerLN">
            <DataObject name="FuFail"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupT::TVTR.FuFail.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VolSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TVTR.VolSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupT::TVTR.VRtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="TWPH"
               titleID="IEC61850_7_4.LNGroupT::TWPH.cl.title"
               base="SensorLN">
            <DataObject name="H2OPHSv"
                     type="SAV"
                     descID="IEC61850_7_4.LNGroupT::TWPH.H2OPHSv.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="XCBR"
               titleID="IEC61850_7_4.LNGroupX::XCBR.cl.title"
               base="SwitchingEquipmentLN">
            <DataObject name="CBOpCap"
                     type="ENS"
                     underlyingType="BreakerOpCapabilityKind"
                     descID="IEC61850_7_4.LNGroupX::XCBR.CBOpCap.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="POWCap"
                     type="ENS"
                     underlyingType="POWSwitchingCapabilityKind"
                     descID="IEC61850_7_4.LNGroupX::XCBR.POWCap.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxOpCap"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupX::XCBR.MaxOpCap.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="SumSwARs"
                     type="BCR"
                     descID="IEC61850_7_4.LNGroupX::XCBR.SumSwARs.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="CBTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupX::XCBR.CBTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="POWOpnTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupX::XCBR.POWOpnTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="POWClsTmms"
                     type="ING"
                     descID="IEC61850_7_4.LNGroupX::XCBR.POWClsTmms.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="XFUS"
               titleID="IEC61850_7_4.LNGroupX::XFUS.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="FuSt"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupX::XFUS.FuSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FuTyp"
                     type="ENG"
                     underlyingType="FuseFunctionKind"
                     descID="IEC61850_7_4.LNGroupX::XFUS.FuTyp.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupX::XFUS.ARtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupX::XFUS.VRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="XSWI"
               titleID="IEC61850_7_4.LNGroupX::XSWI.cl.title"
               base="SwitchingEquipmentLN">
            <DataObject name="SwTyp"
                     type="ENS"
                     underlyingType="SwitchFunctionKind"
                     descID="IEC61850_7_4.LNGroupX::XSWI.SwTyp.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SwOpCap"
                     type="ENS"
                     underlyingType="SwitchingCapabilityKind"
                     descID="IEC61850_7_4.LNGroupX::XSWI.SwOpCap.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="YEFN"
               titleID="IEC61850_7_4.LNGroupY::YEFN.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="EndPosR"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YEFN.EndPosR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="EndPosL"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YEFN.EndPosL.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PotAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YEFN.PotAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MotAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YEFN.MotAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ColPosA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupY::YEFN.ColPosA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="ColAEFN"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupY::YEFN.ColAEFN.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="NeutVol"
                     type="CMV"
                     descID="IEC61850_7_4.LNGroupY::YEFN.NeutVol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupY::YEFN.TapChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColTapPos"
                     type="ISC"
                     descID="IEC61850_7_4.LNGroupY::YEFN.ColTapPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColPos"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupY::YEFN.ColPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="ColChg"
                     type="BAC"
                     descID="IEC61850_7_4.LNGroupY::YEFN.ColChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="YLTC"
               titleID="IEC61850_7_4.LNGroupY::YLTC.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="OpCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.OpCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="EndPosR"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.EndPosR.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="EndPosL"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.EndPosL.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OoStep"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.OoStep.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LTCCycAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.LTCCycAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BlkLoVisc"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YLTC.BlkLoVisc.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TapPos"
                     type="ISC"
                     descID="IEC61850_7_4.LNGroupY::YLTC.TapPos.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
            <DataObject name="TapChg"
                     type="BSC"
                     descID="IEC61850_7_4.LNGroupY::YLTC.TapChg.desc"
                     presCond="AtLeastOne"
                     presCondArgs="1"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="YPSH"
               titleID="IEC61850_7_4.LNGroupY::YPSH.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="ShOpCap"
                     type="ENS"
                     underlyingType="SwitchingCapabilityKind"
                     descID="IEC61850_7_4.LNGroupY::YPSH.ShOpCap.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="Pos"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupY::YPSH.Pos.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkOpn"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupY::YPSH.BlkOpn.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="BlkCls"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupY::YPSH.BlkCls.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ChaMotEna"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupY::YPSH.ChaMotEna.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="YPTR"
               titleID="IEC61850_7_4.LNGroupY::YPTR.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="OpNoLod"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OpNoLod.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpOvA"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OpOvA.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpOvV"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OpOvV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OpUnV"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OpUnV.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LodFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupY::YPTR.LodFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="MaxVA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupY::YPTR.MaxVA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OvlTm"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OvlTm.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OvlTmEmg"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OvlTmEmg.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="HiVRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.HiVRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LoVRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.LoVRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.VARtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="MaxVASet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.MaxVASet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OvlTmSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OvlTmSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="OvlTmEmgSet"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupY::YPTR.OvlTmEmgSet.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZAXN"
               titleID="IEC61850_7_4.LNGroupZ::ZAXN.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="Vol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZAXN.Vol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Amp"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZAXN.Amp.desc"
                     presCond="O"
                     dsPresCond="O"/>
         </LNClass>
         <LNClass name="ZBAT"
               titleID="IEC61850_7_4.LNGroupZ::ZBAT.cl.title"
               base="BatteryLN">
            <DataObject name="TestRsl"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZBAT.TestRsl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BatTest"
                     type="SPC"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupZ::ZBAT.BatTest.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZBSH"
               titleID="IEC61850_7_4.LNGroupZ::ZBSH.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="React"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.React.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="AbsReact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.AbsReact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LosFact"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.LosFact.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="Vol"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.Vol.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="DspA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.DspA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="LkgA"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.LkgA.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="RefReact"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.RefReact.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RefPF"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.RefPF.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RefV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZBSH.RefV.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZCAB"
               titleID="IEC61850_7_4.LNGroupZ::ZCAB.cl.title"
               base="ConductorLN"/>
         <LNClass name="ZCAP"
               titleID="IEC61850_7_4.LNGroupZ::ZCAP.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="DschBlk"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZCAP.DschBlk.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="CapDS"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZCAP.CapDS.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZCON"
               titleID="IEC61850_7_4.LNGroupZ::ZCON.cl.title"
               base="BaseConverterLN"/>
         <LNClass name="ZGEN"
               titleID="IEC61850_7_4.LNGroupZ::ZGEN.cl.title"
               base="CmdEquipmentInterfaceLN">
            <DataObject name="GnSt"
                     type="ENS"
                     underlyingType="RotatingMachineStateKind"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.GnSt.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OpNoLod"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.OpNoLod.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="RotDir"
                     type="ENS"
                     underlyingType="RotationalDirectionKind"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.RotDir.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OpUnExt"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.OpUnExt.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="OpOvExt"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.OpOvExt.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="LosOil"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.LosOil.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LosVac"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.LosVac.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PresAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.PresAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GnSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.GnSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="GnCtl"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.GnCtl.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DExt"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.DExt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="AuxSco"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.AuxSco.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VArR"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.VArR.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VArL"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.VArL.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DmdW"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.DmdW.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="WRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.WRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.VARtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZGEN.VRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZGIL"
               titleID="IEC61850_7_4.LNGroupZ::ZGIL.cl.title"
               base="EquipmentInterfaceLN"/>
         <LNClass name="ZLIN"
               titleID="IEC61850_7_4.LNGroupZ::ZLIN.cl.title"
               base="ConductorLN"/>
         <LNClass name="ZMOT"
               titleID="IEC61850_7_4.LNGroupZ::ZMOT.cl.title"
               base="CmdEquipmentInterfaceLN">
            <DataObject name="MotSt"
                     type="ENS"
                     underlyingType="RotatingMachineStateKind"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.MotSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="RotThmSt"
                     type="ENS"
                     underlyingType="RotorThermalStateKind"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.RotThmSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LosOil"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.LosOil.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="LosVac"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.LosVac.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PresAlm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.PresAlm.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="DExt"
                     type="SPC"
                     descID="IEC61850_7_4.LNGroupZ::ZMOT.DExt.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZREA"
               titleID="IEC61850_7_4.LNGroupZ::ZREA.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZREA.VRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="ARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZREA.ARtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZREA.VARtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VArRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZREA.VArRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZRES"
               titleID="IEC61850_7_4.LNGroupZ::ZRES.cl.title"
               base="EquipmentInterfaceLN"/>
         <LNClass name="ZRRC"
               titleID="IEC61850_7_4.LNGroupZ::ZRRC.cl.title"
               base="ControlEquipmentInterfaceLN">
            <DataObject name="GnSt"
                     type="ENS"
                     underlyingType="RotatingMachineStateKind"
                     descID="IEC61850_7_4.LNGroupZ::ZRRC.GnSt.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="GnSpd"
                     type="MV"
                     descID="IEC61850_7_4.LNGroupZ::ZRRC.GnSpd.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="GnCtl"
                     type="DPC"
                     descID="IEC61850_7_4.LNGroupZ::ZRRC.GnCtl.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZSAR"
               titleID="IEC61850_7_4.LNGroupZ::ZSAR.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="OpCnt"
                     type="INS"
                     descID="IEC61850_7_4.LNGroupZ::ZSAR.OpCnt.desc"
                     presCond="O"
                     dsPresCond="O"/>
            <DataObject name="OpSar"
                     type="SPS"
                     transient="true"
                     descID="IEC61850_7_4.LNGroupZ::ZSAR.OpSar.desc"
                     presCond="M"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZSCR"
               titleID="IEC61850_7_4.LNGroupZ::ZSCR.cl.title"
               base="CmdEquipmentInterfaceLN">
            <DataObject name="Alm"
                     type="SPS"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.Alm.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="AmpSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.AmpSpt.desc"
                     presCond="MFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupZ::ZSCR__(_MFcond(2)_=__((_SetV,_AmpSpt_))__)_.cond.LNGroupZ::ZSCR.AmpSpt"
                     dsPresCond="O"/>
            <DataObject name="VolSpt"
                     type="APC"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.VolSpt.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupZ::ZSCR__(_MFcond(3)_=__((_SetA,_VolSpt_))__)_.cond.LNGroupZ::ZSCR.VolSpt"
                     dsPresCond="O"/>
            <DataObject name="OpModRect"
                     type="ENG"
                     underlyingType="RectifierControlModeKind"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.OpModRect.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SetA"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.SetA.desc"
                     presCond="MFcond"
                     presCondArgs="3"
                     presCondArgsID="IEC61850_7_4.LNGroupZ::ZSCR__(_MFcond(3)_=__((_SetA,_VolSpt_))__)_.cond.LNGroupZ::ZSCR.SetA"
                     dsPresCond="F"/>
            <DataObject name="SetV"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSCR.SetV.desc"
                     presCond="MFcond"
                     presCondArgs="2"
                     presCondArgsID="IEC61850_7_4.LNGroupZ::ZSCR__(_MFcond(2)_=__((_SetV,_AmpSpt_))__)_.cond.LNGroupZ::ZSCR.SetV"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZSMC"
               titleID="IEC61850_7_4.LNGroupZ::ZSMC.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="RotDir"
                     type="ENS"
                     underlyingType="RotationalDirectionKind"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.RotDir.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.VRtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="ARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.ARtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="WRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.WRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="VARtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.VARtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SpdRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SpdRtg.desc"
                     presCond="M"
                     dsPresCond="F"/>
            <DataObject name="SpdCrit"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SpdCrit.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FldRisTmp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.FldRisTmp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SttRisTmp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SttRisTmp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SttRis"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SttRis.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="PFRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.PFRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Iner"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Iner.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FldAmpRtg"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.FldAmpRtg.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FldAmpRtgZer"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.FldAmpRtgZer.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="FldRis"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.FldRis.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="BaseImp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.BaseImp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SttLkgX"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SttLkgX.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xd"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xd.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xdp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xdp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xds"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xds.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xq"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xq.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xqp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xqp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="Xqs"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.Xqs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="X0"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.X0.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="X2"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.X2.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTdp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTdp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTds"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTds.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTd0p"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTd0p.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTd0s"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTd0s.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTqp"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTqp.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTqs"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTqs.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTq0p"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTq0p.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTq0s"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTq0s.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="TmTa"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.TmTa.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SatCffS10"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SatCffS10.desc"
                     presCond="O"
                     dsPresCond="F"/>
            <DataObject name="SatCffS12"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZSMC.SatCffS12.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZTCF"
               titleID="IEC61850_7_4.LNGroupZ::ZTCF.cl.title"
               base="EquipmentInterfaceLN">
            <DataObject name="PwrHz"
                     type="ASG"
                     descID="IEC61850_7_4.LNGroupZ::ZTCF.PwrHz.desc"
                     presCond="O"
                     dsPresCond="F"/>
         </LNClass>
         <LNClass name="ZTCR"
               titleID="IEC61850_7_4.LNGroupZ::ZTCR.cl.title"
               base="EquipmentInterfaceLN"/>
      </LNClasses>
</NS>
  `,
    `<?xml version="1.0" encoding="UTF-8"?>
<!--
COPYRIGHT (c) IEC, 2016. All rights reserved. Disclaimer: The IEC disclaims liability for any personal injury, property or other damages of any nature whatsoever, whether special, indirect, consequential or compensatory, directly or indirectly resulting from this software and the document upon which its methods are based, use of, or reliance upon.
-->
<!--
History:
- 2016-01-11: first version
- 2016-02-18: corrections according to TF meeting in Cathedral City
	+ MFctrl -> MOctrl
	+ MFsboNormal -> MOsboNormal
	+ MFsboEnhanced -> MOsboEnhanced
- 2016-04-29:
    + updated file according to NSD.xsd changes (removal of AppliesTo element; usage of "abstract" type DAReference instead of VisString129; 8-1 introduced FCs and their applicable services)
    + added umlDate attribute for versioning
- 2016-05-18: [updates according to today's TF telco]
	+ removed FCs for control blocks.
- 2019-04-10: Add UDP IP PhyComAddr
  + add MOsbo
  + change IGMPSrc to iGMPSrc
  + change SBO basic type from DAReference to VisString129
-->
<!--
Notes on presence conditions:
From 7-3:
- MOoperTm: Element is mandatory if at least one controlled object on the IED supports time activation service; otherwise it is optional.
New presence conditions:
- MOctrl: Element is mandatory if declared control model supports anything else besides (optionally) status-only, otherwise optional.
- MOsboNormal: Element is mandatory if declared control model supports 'sbo-with-normal-security', otherwise optional.
- MOsboEnhanced: Element is mandatory if declared control model supports 'sbo-with-enhanced-security', otherwise optional.
-->
<ServiceNS xmlns="http://www.iec.ch/61850/2016/NSD" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="IEC 61850-8-1" version="2003" revision="A" release="2" xsi:schemaLocation="http://www.iec.ch/61850/2016/NSD NSD.xsd" umlDate="2019-04-10T12:00:00Z">
	<Copyright>
		<Notice>
		COPYRIGHT (c) IEC, 2018. This version of this NSD is part of IEC 61850-8-1:2018; see the IEC 61850-8-1:2018 for full legal notices. In case of any differences between the here-below code and the IEC published content, the here-below code is the valid one; it may contain updates. See history files. The whole document has to be taken into account to have a full description of this code component.
See www.iec.ch/CCv1 for copyright details
		</Notice>
		<License uri="www.iec.ch/CCv1" kind="Standard">IEC License</License>
	</Copyright>
	<FunctionalConstraints>
		<FunctionalConstraint abbreviation="CO" descID="IEC 61850-8-1:2003.CO">
			<ApplicableServices>
				<Service name="Cancel"/>
				<Service name="CommandTermination"/>
				<Service name="Operate"/>
				<Service name="Select"/>
				<Service name="SelectWithValue"/>
				<Service name="TimeActivatedOperate"/>
			</ApplicableServices>
		</FunctionalConstraint>
	</FunctionalConstraints>
	<PresenceConditions>
		<PresenceCondition name="MOctrl" descID="IEC 61850-8-1:2003.MOctrl"/>
		<PresenceCondition name="MOsboNormal" descID="IEC 61850-8-1:2003.MOsboNormal"/>
		<PresenceCondition name="MOsboEnhanced" descID="IEC 61850-8-1:2003.MOsboEnhanced"/>
		<PresenceCondition name="MOsbo" descID="IEC 61850-8-1:2003.MOsbo"/>
	</PresenceConditions>
	<ServiceTypeRealizations>
		<ServiceTypeRealization titleID="IEC 61850-8-1:2003.PhyComAddr" name="PhyComAddr">
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddr.Addr" name="Addr" typeKind="BASIC" type="Octet6" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddr.PRIORITY" name="PRIORITY" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddr.VID" name="VID" typeKind="BASIC" type="INT16U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddr.APPID" name="APPID" typeKind="BASIC" type="INT16U" presCond="M"/>
		</ServiceTypeRealization>
		<ServiceTypeRealization titleID="IEC 61850-8-1:2003.PhyComAddrIP" name="PhyComAddr">
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.Addr" name="Addr" typeKind="BASIC" type="Octet16" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.isIPv6" name="isIPv6" typeKind="BASIC" type="BOOLEAN" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.PRIORITY" name="PRIORITY" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.VID" name="VID" typeKind="BASIC" type="INT16U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.APPID" name="APPID" typeKind="BASIC" type="INT16U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.gwAddr" name="gwAddr" typeKind="BASIC" type="Octet16" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.tOS" name="tOS" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.PhyComAddrIP.iGMPSrc" name="iGMPSrc" typeKind="BASIC" type="Octet16" presCond="M"/>
		</ServiceTypeRealization>
	</ServiceTypeRealizations>
	<ServiceConstructedAttributes>
		<ServiceConstructedAttribute titleID="IEC 61850-8-1:2003.SBOw" name="SBOw" typeKindParameterized="true">
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlVal" name="ctlVal" typeKind="undefined" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.operTm" name="operTm" typeKind="BASIC" type="Timestamp" presCond="MOoperTm"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.origin" name="origin" typeKind="CONSTRUCTED" type="Originator" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlNum" name="ctlNum" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.T" name="T" typeKind="BASIC" type="Timestamp" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.Test" name="Test" typeKind="BASIC" type="BOOLEAN" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.Check" name="Check" typeKind="BASIC" type="Check" presCond="M"/>
		</ServiceConstructedAttribute>
		<ServiceConstructedAttribute titleID="IEC 61850-8-1:2003.Oper" name="Oper" typeKindParameterized="true">
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlVal" name="ctlVal" typeKind="undefined" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.operTm" name="operTm" typeKind="BASIC" type="Timestamp" presCond="MOoperTm"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.origin" name="origin" typeKind="CONSTRUCTED" type="Originator" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlNum" name="ctlNum" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.T" name="T" typeKind="BASIC" type="Timestamp" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.Test" name="Test" typeKind="BASIC" type="BOOLEAN" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.Check" name="Check" typeKind="BASIC" type="Check" presCond="M"/>
		</ServiceConstructedAttribute>
		<ServiceConstructedAttribute titleID="IEC 61850-8-1:2003.Cancel" name="Cancel" typeKindParameterized="true">
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlVal" name="ctlVal" typeKind="undefined" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.operTm" name="operTm" typeKind="BASIC" type="Timestamp" presCond="MOoperTm"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.origin" name="origin" typeKind="CONSTRUCTED" type="Originator" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.ctlNum" name="ctlNum" typeKind="BASIC" type="INT8U" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.T" name="T" typeKind="BASIC" type="Timestamp" presCond="M"/>
			<SubDataAttribute descID="IEC 61850-8-1:2003.Test" name="Test" typeKind="BASIC" type="BOOLEAN" presCond="M"/>
		</ServiceConstructedAttribute>
	</ServiceConstructedAttributes>
	<ServiceCDCs>
		<ServiceCDC cdc="SPC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="DPC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="BOOLEAN" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="INC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="INT32" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="INT32" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="INT32" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="ENC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="ENUMERATED" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="ENUMERATED" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="ENUMERATED" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="BSC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="ISC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="INT8" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="INT8" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="INT8" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="APC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="CONSTRUCTED" underlyingType="AnalogueValueCtl" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="CONSTRUCTED" underlyingType="AnalogueValueCtl" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="CONSTRUCTED" underlyingType="AnalogueValueCtl" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
		<ServiceCDC cdc="BAC">
			<ServiceDataAttribute name="SBO" typeKind="BASIC" type="VisString129" fc="CO" presCond="MOsboNormal" descID="IEC 61850-8-1:2003.SBO"/>
			<ServiceDataAttribute name="SBOw" typeKind="CONSTRUCTED" type="SBOw" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOsboEnhanced"/>
			<ServiceDataAttribute name="Oper" typeKind="CONSTRUCTED" type="Oper" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOctrl"/>
			<ServiceDataAttribute name="Cancel" typeKind="CONSTRUCTED" type="Cancel" underlyingTypeKind="BASIC" underlyingType="Tcmd" fc="CO" presCond="MOsbo"/>
		</ServiceCDC>
	</ServiceCDCs>
</ServiceNS>
  `,
];
const [nsd72, nsd73, nsd74, nsd81] = nsdStrings.map(xml => new DOMParser().parseFromString(xml, 'application/xml'));
export { nsd72, nsd73, nsd74, nsd81 };
//# sourceMappingURL=nsd.js.map