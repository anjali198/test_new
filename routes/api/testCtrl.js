/**
 * Created by kopinath on 07/11/16.
 */

var tempArray = [
    {"name":"user1","mobile":"9870870088","email":"user@gmail.com",id:1},
    {"name":"user1","mobile":"9870870088","email":"user@gmail.com",id:2},
    {"name":"user1","mobile":"9870870088","email":"user@gmail.com",id:3}
];
var latestId = 4;


exports.saveData = function (req, res, next) {
    req.body.id = ++latestId;
    tempArray.push(req.body);
    res.status(201).json({
        message: "Data saved successfully",
        data: req.body
    });

};

exports.getData = function (req, res, next) {
    res.status(200).json({
        message: "Data loaded successfully",
        data: tempArray
    });
};

exports.deleteData = function (req, res, next) {
    var delUser = tempArray.splice(req.index, 1);
    res.status(200).json({
        message: "Data deleted successfully",
        data: delUser
    });
};

exports.updateData = function (req, res, next) {


    tempArray[req.index].name = req.body.name;
    tempArray[req.index].mobile = req.body.mobile;
    res.status(200).json({
        message: "Data updated successfully",
        data: tempArray[userIndex]
    });
};


exports.findIndex = function (req, res, next, id) {

    function findUser(user) {
        return user.id == req.params.id;
    }

    req.index = tempArray.findIndex(findUser);
    if (req.index < 0) {
        var err = new Error();
        err.name = "invalid index";
        next(err);
    } else {
        next();
    }
}