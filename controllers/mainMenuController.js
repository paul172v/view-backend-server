const catchAsync = require("../utils/catchAsync");

exports.getAll = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "Success",
    message: "Test 2 passed successfully",
  });
});
