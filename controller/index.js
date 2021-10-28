const { getCall } = require("../utils/apiServices")
const { apiRoutes } = require("../utils/constants")
const { fetchObjectDetails } = require('../services');

exports.landingPageController = async (req, res, next) => {
    try {
        const { data } = await getCall(apiRoutes.getDepartmentList)
        return res.render('../views/pages/index', {
            departmentList: data.departments || [],
        })
    } catch (err) {
        return next(err)
    }
}

exports.objectDetailsPageController = async (req, res, next) => {
    try {
        const { data } = await fetchObjectDetails(req.params.objectId)
        return res.render('../views/pages/object-details', {
            objectDetails: data,
        })
    } catch (err) {
        return next(err.message)
    }
}

