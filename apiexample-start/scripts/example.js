// define global variables
var apiService;
var authService;
var inspectionService;
var woService;
var token = localStorage.getItem('token');
var selectedWorkOrder;
var selectedInspection;

define(
    ['../cw-sdk/api/services/general/authenticationservice'],
    function (api) {

        //Create a new api service
        apiService = new api.ApiService("https://training.cityworks.com/cityworks", token);

        //Create an authentication service and a workorder service
        authService = new api.AuthenticationService(apiService);
        inspectionService = new inspection.InspectionService(apiService);
        woService = new wo.WorkOrderService(apiService);
        // validate function that will test the Token
        function validate() {
            // search localStorage for a token
            
            // create the data object using our token
            
            // access the validate api and test our token.

                // ".then" catches the response object

                // if no token or bad token then it will send the user to the login page   
            
        }
        // invoke the validate function
        validate();
    });
// work Order Create 
// invoked by the create work order button.
function create() {


    // create data object

    // get selected inspectionid
    let inspectionid = document.getElementById('inspection-id').value;

    if (!inspectionid) {
        // create the data object
   
        // define data object

        // access the create function and hit the create api
   

    } else {
        // create the data object
    
        // access the create function and hit the create api from inspection
    }
};

// workOrderCreateCallback function to log the response object
function workOrderCreateCallback(response) {
    if (response.Status !== 0) {
        alert(response.Message);
    } else {
        document.getElementById('callback-notes').innerText = 'Work Order Created'
    }
};

// work order search

function workOrderSearch() {
    // data object


    // access the sdk and call the search function

};

// response object is an array of ids this is invoked by the ".then" function
function workOrderSearchCallback(response) {

    // array of ids

    // 2nd data object for the ByIds function

    // return ByIds function on the SDK

};

// array of work order objects
function byWorkOrderIdsCallback(response) {
    let lis = document.querySelectorAll('#work-orders li');
    let ul = document.querySelector('#work-orders');

    if (lis !== []) {
        for (let i = 0; i < lis.length; i++) {
            ul.removeChild(lis[i]);
        }
    }

    // array of work order objects
    let workOrders = response.Value;

    // builds out the HTML for the work Orders
    workOrders.forEach(wo => {
        let li = document.createElement('li');
        li.addEventListener('click', function () {

            let divs = document.querySelectorAll('#work-orders li');

            for (let i = 0; i < divs.length; i++) {
                divs[i].className = 'not-clicked';
            };

            li.className = 'clicked';

            document.getElementById('callback-notes').innerText = `Work Order Id: ${wo.WorkOrderId}
                                                                  Description: ${wo.Description}
                                                                  Work Order Template: ${wo.WOTemplateId}`

            // create data object                                                      
            let data = {
                WorkOrderIds: [wo.WorkOrderId]
            };

            // inspection by workorder ids call
            inspectionService.ByWorkOrderIds(data).then(function (response) {
                if (response.Value.length > 0) {

                    response.Value.forEach(function (inspection) {
                        document.getElementById('callback-notes').innerText += `
                                                                            Inspection Id: ${inspection.InspectionId}`;
                    });
                } else {
                    document.getElementById('callback-notes').innerText += `
                                                                            Inspection Id: No Inspections`;
                }
            });

            // set selected work order id
            selectedWorkOrder = wo.WorkOrderId;
            
            // selected work order id
        });
        document.getElementById('work-orders').appendChild(li);
        let div1 = document.createElement('div');
        // div1 content to workorder id
        div1.textContent = 'Workorder ID: ' + wo.WorkOrderId;
        let div2 = document.createElement('div');
        // div2 content to workorder description
        div2.textContent = 'Description: ' + wo.Description;
        let div3 = document.createElement('div');
        // div3 content to workorder street name
        div3.textContent = 'Street Name: ' + wo.StreetName;
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
    });
};

// inspection search function

function inspectionSearch() {

    // create data object for the api call with no filters
    

    // inspection search api call.

        // search callback
        
        // when inspection search callback returns call .then
        

};

// search callback function
function inspectionSearchCallback(response) {

    // use response to get teh inspection Ids

    // data object for the ByIds Api call
    
    // return byids api call

};

// byIds callback function
function inspectionByIdsCallback(response) {
    // clear inspctions
    let lis = document.querySelectorAll('#inspections li');
    let ul = document.querySelector('#inspections');

    if (lis !== []) {
        for (let i = 0; i < lis.length; i++) {
            ul.removeChild(lis[i]);
        }
    }

    // array of inspection objects
    let inspections = response.Value;

    // builds out the HTML for the inspections
    inspections.forEach(inspection => {
        let li = document.createElement('li');
        li.addEventListener('click', function () {

            let divs = document.querySelectorAll('#inspections li');

            for (let i = 0; i < divs.length; i++) {
                divs[i].className = 'not-clicked';
            };

            li.className = 'clicked';

            // sets the selectedInspection variable to the id
            selectedInspection = inspection.InspectionId;
        });
        // print out inspections
        document.getElementById('inspections').appendChild(li);
        let div1 = document.createElement('div');
        // div1 content to inspection id
        div1.textContent = 'Inspection ID: ' + inspection.InspectionId;
        let div2 = document.createElement('div');
        // div2 content to inspection entity type
        div2.textContent = 'Description: ' + inspection.EntityType;
        let div3 = document.createElement('div');
        // div3 content to inspection template id
        div3.textContent = 'Template ID: ' + inspection.InspTemplateId;
        li.appendChild(div1);
        li.appendChild(div2);
        li.appendChild(div3);
    });
};

// attach selected Inspection to selected Work Order
function updateInspection() {

    // data object requires an Inspection id.

    // inspection update api call

};