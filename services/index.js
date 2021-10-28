const { getCall } = require("../utils/apiServices");
const { apiRoutes } = require("../utils/constants");

exports.fetchObjectDetails = async (objectId) => {
    try {
        return getCall(apiRoutes.getObjectDetails.replace(':OBJECT_ID', objectId))
    } catch(err) {
        return err
    }
}