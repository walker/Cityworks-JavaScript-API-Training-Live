// define global variables
var apiService;
var woService;
var woTemplateService;
var entityService;
var token = localStorage.getItem('token');

define(
    [
        '../cw-sdk/api/services/general/authenticationservice',
        '../cw-sdk/api/services/ams/workorderservice',
        '../cw-sdk/api/services/ams/workordertemplateservice',
        '../cw-sdk/api/services/ams/inspectionservice',
        '../cw-sdk/api/services/ams/entityservice'
    ],
    function (api, wo, wot, inspection, entity) {

        //Create a new api service
        apiService = new api.ApiService("https://training.cityworks.com/cityworks", token);

        //Create a work order template service and a workorder service
        woTemplateService = new wot.WorkOrderTemplateService(apiService);

        //Create an entity service
        entityService = new entity.EntityService(apiService);

        // invoke the workOrderTemplateSearch function
        workOrderTemplateSearch();

        populateEntityGroups();

    });

function onEntityGroupChange() {
    let group = document.querySelector('#entity-group').value;
    let data = { EntityGroups: [group] };
    entityService.Types(data)
        .then(entityTypesCallback);
}
function entityTypesCallback(response) {
    if (response.Status === 0) {
        removeOptions(document.getElementById('entity-type'));
        response.Value.forEach(type => {
            let option = document.createElement('option');
            document.querySelector('#entity-type').appendChild(option);
            option.innerText = type.Description;
            option.value = type.Code;
        });
    }
}

function removeOptions(select) {
    for (let i = select.options.length; i >= 0; i--) {
        select.remove(i);
    }
}

function populateEntityGroups() {
    data = {};
    entityService.Groups(data)
        .then(entityGroupsCallback);
}

function entityGroupsCallback(response) {
    if (response.Status === 0) {
        response.Value.forEach(group => {
            let option = document.createElement('option');
            document.querySelector('#entity-group').appendChild(option);
            option.innerText = group.ModuleName;
            option.value = group.Module;
        });
        onEntityGroupChange();
    }
}

function workOrderTemplateSearch() {

    data = {}

    woTemplateService.Search(data)
        .then(templateSearchCallback)
        .then(templateIdsCallback)
};

function templateSearchCallback(response) {

    let woTemplateIds = response.Value;

    let data = {
        WOTemplateIds: woTemplateIds
    }

    return woTemplateService.ByIds(data)

};

function templateIdsCallback(response) {
    let woTemplates = response.Value;

    woTemplates.forEach(wot => {
        let option = document.createElement('option');
        document.querySelector('#template-id').appendChild(option);
        option.innerText = wot.Description;
        option.value = wot.WOTemplateId
    })
};