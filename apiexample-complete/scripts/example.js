// define global variables
var apiService;
var authService;
var inspectionService;
var woService;
var token = localStorage.getItem('token');
var selectedWorkOrder;
var selectedInspection;

define(
    ['../cw-sdk/api/services/general/authenticationservice', '../cw-sdk/api/services/ams/workorderservice', '../cw-sdk/api/services/ams/inspectionservice'],
    function (api, wo, inspection) {

        //Create a new api service
        apiService = new api.ApiService("https://training.cityworks.com/cityworks", token);

        //Create an authentication service and a workorder service
        authService = new api.AuthenticationService(apiService);
        inspectionService = new inspection.InspectionService(apiService);
        woService = new wo.WorkOrderService(apiService);
        // validate function that will test the Token
        function validate() {
            // search localStorage for a token
            let token = localStorage.getItem('token');
            // create the data object using our token
            let data = {
                Token: token
            }
            // access the validate api and test our token.
            authService.Validate(data)
                // ".then" catches the response object
                .then(function (response) {
                    // if no token or bad token then it will send the user to the login page
                    if (response.Value !== true) {
                        window.location = 'login.html';
                    }
                });
        }
        // invoke the validate function
        validate();
    });
// work Order Create 
// invoked by the create work order button.
function create() {
    
let data;

    let inspectionid = document.getElementById('inspection-id').value;

    if (!inspectionid) {
        // create the data object
        data = {
            EntityType: document.getElementById('entity-type').value,
            WOTemplateId: document.getElementById('template-id').value,
            StreetName: document.getElementById('street-name').value,
            City: document.getElementById('city').value,
        };

        // access the create function and hit the create api
        woService.Create(data)

            // invoke the workOrderCreateCallback function when the object is returned (promise)
            .then(workOrderCreateCallback);

    } else {
    
        // create the data object
        data = {
            EntityType: document.getElementById('entity-type').value,
            WOTemplateId: document.getElementById('template-id').value,
            StreetName: document.getElementById('street-name').value,
            City: document.getElementById('city').value,
            InspectionId: document.getElementById('inspection-id').value,
        };

         // access the create function and hit the create from inspection id
        woService.CreateFromInspection(data)

            .then(workOrderCreateCallback);
       
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
    let data = {
        MaxResults: document.getElementById('wo-number').value,
        ActualFinishDateIsNull: true
    };

    // access the sdk and call the search function
    woService.Search(data)
        // workorderSearch callback function
        .then(workOrderSearchCallback)
        // byIds callback function
        .then(byWorkOrderIdsCallback);
};

// response object is an array of ids this is invoked by the ".then" function
function workOrderSearchCallback(response) {

    // array of ids
    let workOrderIds = response.Value;

    // 2nd data object for the ByIds function
    let data = {
        WorkOrderIds: workOrderIds
    }

    // ByIds function on the SDK
    return woService.ByIds(data);
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
    let data = {};

    // inspection search api call.
    inspectionService.Search(data)
        // search callback
        .then(inspectionSearchCallback)
        // when inspection search callback returns call .then
        .then(inspectionByIdsCallback);

};

// search callback function
function inspectionSearchCallback(response) {

    let inspectionIds = response.Value;

    // data object for the ByIds Api call
    let data = {
        InspectionIds: inspectionIds
    };

    return inspectionService.ByIds(data);
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

// // attach selected Inspection to selected Work Order
function updateInspection() {

    // data object requires an Inspection id.
    let data = {
        InspectionId: selectedInspection,
        WorkOrderId: selectedWorkOrder
    };

    // update inspection api call
    inspectionService.Update(data).then(function(response) {
        document.getElementById('callback-notes').innerText = 
            `Work order ${selectedWorkOrder} attached to inspection ${selectedInspection}`;
    });
};