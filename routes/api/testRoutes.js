/**
 * Created by kopinath on 07/11/16.
 */


var testCtrl = require('./testCtrl');
var testValid=require('./validate');


module.exports = function (router) {

    router.route('/user')
        .post(testValid.saveData,testCtrl.saveData)
        .get(testCtrl.getData);

    router.route('/user/:id')
        .delete(testCtrl.deleteData)
        .put(testCtrl.updateData);

    router.param("id",testCtrl.findIndex);
}

