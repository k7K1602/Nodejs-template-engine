const { landingPageController, objectDetailsPageController } = require("../controller");

module.exports = (app) => {
    app.get('/', landingPageController),
    app.get('/object/:objectId', objectDetailsPageController)
}