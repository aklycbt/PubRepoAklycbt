// LandingGeneral.js

import React from 'react';
import TimesheetProcess from './TimesheetProcess';
import TimesheetMain from './TimesheetMain';
import TimesheetDataLoad from './TimesheetDataLoad';
import LoginValidation from './LoginValidation';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";
import { ExportToCsv } from 'export-to-csv';

var moment = require('moment');

function StartGenerateReport(start, csvData) {
  
  if (start) 
  return  <CSVDownload data={csvData} target="_blank" />;

}

function StartValidation(start, user, password, validationResult) {
  if (start)
  return <LoginValidation user = {user} password = {password} validationResult = {validationResult} />
}

function StartProcessing(start, weeklyTimesheetArray, dataSavingProcessResult) {
   if (start)
   return <TimesheetProcess weeklyTimesheetArray = {weeklyTimesheetArray} dataSavingProcessResult = {dataSavingProcessResult} />
}

function StartDataLoad(start, daysToLoad, loadWeeklyData) {
  if (start)
  return <TimesheetDataLoad daysToLoad = {daysToLoad} loadWeeklyData = {loadWeeklyData} />
}
    
class LandingGeneral extends React.Component {
  constructor(props){
    super(props)
    this.state = {    
        genReport: false,
        csvData: [],
        loginValidationStart: false,
        loginValidationResult: "",
        userData: {},
        startProcessing: false, // trigger to save data
        dataSavingProcessResult: '',
        loadData: false, // trigger to load data
        weeklyTimesheetArray: [], // data array to save
        daysToLoad: [], // input from frontend
        weeklyDataLoaded: [], // output to frontend
        fullTimesheetArray: []
     };
  global.loginStaffCode = ""
  this.handleStart = this.handleStart.bind(this)
  this.handleLoadData = this.handleLoadData.bind(this)
  this.loadWeeklyData = this.loadWeeklyData.bind(this)
  this.handleLoginValidation = this.handleLoginValidation.bind(this)
  this.validationResult = this.validationResult.bind(this)
  this.dataSavingProcessResult = this.dataSavingProcessResult.bind(this)
  this.genReport = this.genReport.bind(this)
  
}

  componentDidMount(){

    let daysToLoad = [
      
      {staffCode: "allen.yu", txDate: "2019-02-11"},
      {staffCode: "allen.yu", txDate: "2019-02-12"},
      {staffCode: "allen.yu", txDate: "2019-02-13"},
      {staffCode: "allen.yu", txDate: "2019-02-14"},
      {staffCode: "allen.yu", txDate: "2019-02-15"},
      {staffCode: "allen.yu", txDate: "2019-02-16"},
      {staffCode: "allen.yu", txDate: "2019-02-17"},
      

      {staffCode: "allen.yu", txDate: "2019-02-18"},
      {staffCode: "allen.yu", txDate: "2019-02-19"},
      {staffCode: "allen.yu", txDate: "2019-02-20"},
      {staffCode: "allen.yu", txDate: "2019-02-21"},
      {staffCode: "allen.yu", txDate: "2019-02-22"},
      {staffCode: "allen.yu", txDate: "2019-02-23"},
      {staffCode: "allen.yu", txDate: "2019-02-24"},


      {staffCode: "allen.yu", txDate: "2019-02-25"},
      {staffCode: "allen.yu", txDate: "2019-02-26"},
      {staffCode: "allen.yu", txDate: "2019-02-27"},
      {staffCode: "allen.yu", txDate: "2019-02-28"},
      {staffCode: "allen.yu", txDate: "2019-03-01"},
      {staffCode: "allen.yu", txDate: "2019-03-02"},
      {staffCode: "allen.yu", txDate: "2019-03-03"}
     
  
  ]

  this.setState({daysToLoad: daysToLoad})

    console.log("Landing => ComponentDidMount => this.props: ", this.props)
    global.loginStaffCode = this.props.match.params.user

    let AXASG = "AXASG";
   
    let SAnD = "SAnD";
    let txDate25 = moment(new Date(2019,1,25)).format("").substr(0, 10)
    let timeSpent4 = 4;

    let AXAHK = "AXAHK";
   
    let Programming = "Programming";
    let timeSpent3 = 3;

    let FTL = "FTL";
   
    let Requirement = "Requirement";

    let txDate11 = moment(new Date(2019,1,11)).format("").substr(0, 10)
    let txDate12 = moment(new Date(2019,1,12)).format("").substr(0, 10);
    let txDate13 = moment(new Date(2019,1,13)).format("").substr(0, 10);
    let txDate14 = moment(new Date(2019,1,14)).format("").substr(0, 10);
    let txDate15 = moment(new Date(2019,1,15)).format("").substr(0, 10);
    let txDate16 = moment(new Date(2019,1,16)).format("").substr(0, 10);
    let txDate17 = moment(new Date(2019,1,17)).format("").substr(0, 10);

    //let txDate17 = moment(new Date(2019,1,17)).format("").substr(0, 10)
    let txDate18 = moment(new Date(2019,1,18)).format("").substr(0, 10)
    let txDate19 = moment(new Date(2019,1,19)).format("").substr(0, 10);
    let txDate20 = moment(new Date(2019,1,20)).format("").substr(0, 10);
    let txDate21 = moment(new Date(2019,1,21)).format("").substr(0, 10);
    let txDate22 = moment(new Date(2019,1,22)).format("").substr(0, 10);
    let txDate23 = moment(new Date(2019,1,23)).format("").substr(0, 10);
    let txDate24 = moment(new Date(2019,1,24)).format("").substr(0, 10);

   // let txDate25 = moment(new Date(2019,1,25)).format("").substr(0, 10);
    let txDate26 = moment(new Date(2019,1,26)).format("").substr(0, 10)
    let txDate27 = moment(new Date(2019,1,27)).format("").substr(0, 10)
    let txDate28 = moment(new Date(2019,1,28)).format("").substr(0, 10);
    let txDate1 = moment(new Date(2019,2,1)).format("").substr(0, 10);
    let txDate2 = moment(new Date(2019,2,2)).format("").substr(0, 10);
    let txDate3 = moment(new Date(2019,2,3)).format("").substr(0, 10);
    let timeSpent6 = 4;
    let timeSpent8 = 8;
    let timeSpent2 = 2;

    let ePOS = "ePOS";
    let EASE = "EASE";
    let WO318 = "WO318";
    let SOW005 = "SOW005";
    let SOW006 = "SOW006";

    let Design = "Design";
    let SIT = "SIT";
    let UAT = "UAT";
    let Meeting = "Meeting";
    let weeklyTimesheetArray =   [

    {key: "", rowIndex: "0", staffCode: "allen.yu", group:AXASG, project:project7, activity:Meeting, txDate: txDate12, timeSpent: 8, delete: false},
    {key: "", rowIndex: "1", staffCode: "allen.yu", group:AXAHK, project:project7, activity:SIT, txDate: txDate18, timeSpent: 4, delete: false},
    {key: "", rowIndex: "2", staffCode: "allen.yu", group:AXAHK, project:project7, activity:Design, txDate: txDate19, timeSpent: 3, delete: false},
    {key: "", rowIndex: "3", staffCode: "allen.yu", group:AXAHK, project:project7, activity:UAT, txDate: txDate20, timeSpent: 2, delete: false},
    {key: "", rowIndex: "4", staffCode: "allen.yu", group:AXASG, project:project7, activity:SIT, txDate: txDate21, timeSpent: 2, delete: false},
   //   {key: "2019-02-12allen.yuAXASGNewTimesheetSystemUAT________________", rowIndex: "0", staffCode: "allen.yu", group:AXASG, project:project4, activity:Design, txDate: txDate12, timeSpent: 17, delete: false},
    {key: "", rowIndex: "5", staffCode: "allen.yu", group:AXASG, project:project7, activity:Meeting, txDate: txDate11, timeSpent: 8, delete: false},
   // {key: "2019-02-11allen.yuAXASGSOW40009OKDesign_____________________", rowIndex: "1", staffCode: "allen.yu", group:AXASG, project:project2, activity:Design, txDate: txDate11, timeSpent: 12, delete: true},
  
      ]

    this.setState({weeklyTimesheetArray: weeklyTimesheetArray}, 
        () => {
            console.log("TimesheetProcess => weeklyTimesheetArray: ", this.state.weeklyTimesheetArray)
        }
      );
  }

  loadWeeklyData = (weeklyData) => {
      this.setState({weeklyDataLoaded: weeklyData}, ()=>{
        console.log("Weekly Data Loaded from return.length: ", this.state.weeklyDataLoaded.length)
        console.log("Weekly Data Loaded from return: ", this.state.weeklyDataLoaded)
        
      })
  }

  handleStart = () => {

    this.setState({startProcessing: false}, () => {this.setState({startProcessing: true})})
  }

  dataSavingProcessResult = (dataSavingProcessResult) => {
      this.setState({dataSavingProcessResult: dataSavingProcessResult}, 
        ()=>{
          console.log("Process result: ", this.state.dataSavingProcessResult)
        })
  }

  handleLoadData = () => {

    this.setState({loadData: false}, () => {this.setState({loadData: true})})
  }

  handleLoginValidation = () => {

    this.setState({loginValidationStart: false}, () => {this.setState({loginValidationStart: true})})
  }

  validationResult = (validationResult, userData) => {
      this.setState({validationResult: validationResult}, () => {console.log(this.state.validationResult)})
      this.setState({userData: userData}, () => {console.log(this.state.userData)})
  }

  genReport = () => {

    let _dateTime = moment().format()
    _dateTime = _dateTime.substr(0, 10) + "_" + 
          _dateTime.substr(11, 2) + "-" +
          _dateTime.substr(14, 2) + "-" +
          _dateTime.substr(17, 2)

    const options = { 
      filename: "Timesheet Data Downloaded " + _dateTime,
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: false,
      title: 'Timesheet Data Downloaded',
      useTextFile: false, // when true, export in .txt format
      useBom: false,
      useKeysAsHeaders: false,  // when true => use the keys as headers => e.g. "txDate", "staffCode"
      headers: ['Staff Code', 'Group', 'Project', 'Date', 'Activity', 'TimeSpent'] // when <useKeysAsHeaders" is false
    };

    let _date = moment(new Date("2019", "01", "17"));
    let _date2 = moment(_date).add(6, "days")

    let fromDate = moment(_date).format().substr(0, 10)
    let toDate = moment(_date2).format().substr(0, 10)
    

    let project6 = "iOS"
    let project7 = "EASE"

    let staffCodeArray = ["allen.yu", "amy.chan"]
    let groupArray = ["FTL", "AXAHK", "AXASG"]
    let projectArray = [project6, project7, "WO318", "ePOS", "New Timesheet System"]
    let dateArray = []
    dateArray.push(fromDate)
    dateArray.push(moment(fromDate).add(1, "days").format().substr(0, 10))
    dateArray.push(moment(fromDate).add(2, "days").format().substr(0, 10))
    dateArray.push(moment(fromDate).add(3, "days").format().substr(0, 10))
    dateArray.push(moment(fromDate).add(4, "days").format().substr(0, 10))
    dateArray.push(moment(fromDate).add(5, "days").format().substr(0, 10))
    dateArray.push(moment(fromDate).add(6, "days").format().substr(0, 10))
   
    console.log("from date: ", fromDate)
    console.log("to date: ", toDate)

    let exportedData = []
    let finalExportedData = []
    let dateParam = fromDate

    console.log("dateParam: ", dateParam)
    

          axios.get('http://localhost:4200/timesheet/exportData/' + 
                staffCodeArray + '/' +
                groupArray + '/' +
                projectArray + '/' +
                dateArray)
    
          .then(response => {
            
                  console.log("response.data: ", response.data)

                  let fullRecord = response.data.map(item => {
                      let object = {}
                      {
                        object.staffCode = item.staffCode
                        object.group = item.group
                        object.project = item.project
                        object.txDate = moment(item.txDate).format().substr(0, 10)                                             
                        object.activity = item.activity
                        object.timeSpent = item.timeSpent
                      }

                      exportedData.push(object)
                      this.setState({csvData: exportedData}, () => {
                     // console.log("this.state.csvData inside map: ", this.state.csvData)
                      })
                      return object

                  })


                 fullRecord.sort((a, b) => 
                 (a.staffCode > b.staffCode) ? 1 :
                 (a.staffCode === b.staffCode) ? 
                       ((a.group > b.group) ? 1 : 
                       (a.group === b.group) ? 
                               ((a.project > b.project) ? 1 :
                               (a.project === b.project) ? 
                                         ((a.txDate > b.txDate) ? 1 : -1) // txDate (fourth)
                : -1) // project (third)
                : -1)  // group (second)
                : -1) // staffCode (first)

               
                this.setState({csvData: fullRecord}, () => {
                  console.log("fullRecord: ", fullRecord)
                  if (this.state.csvData.length > 0) {
                    const csvExporter = new ExportToCsv(options)
                    csvExporter.generateCsv(this.state.csvData);
                  } else {
                    console.log("No record found")
                  }
                })

                            
          }) // axios.get

  }


  render() {
   
    return (
    
      <div>

          <div style={{fontSize: 20, fontFamily: "Times New Roman", color:"blue"}}>
            Testing on Javascript Full Application Stack: <span style={{color:"red"}}>M</span>ongoDB, <span style={{color:"red"}}>E</span>xpressJS, <span style={{color:"red"}}>R</span>eactJS, <span style={{color:"red"}}>N</span>ode.JS <span style={{color:"red"}}>(MERN)</span>
          </div>
        
          <div>
                <TimesheetMain />
          </div>

          <br />
          <br />
          <br />

                <div>
                    <CSVLink
                    data={this.state.csvData}
                    filename={"Downloaded Timesheet Data.csv"}
                    className="btn btn-primary"
                    target="_blank" 
                    >
                    Download
                    </CSVLink>
                </div>
      </div>
                     
    );
  }
}
export default LandingGeneral;