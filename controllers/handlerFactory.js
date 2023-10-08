const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
      return next(
        new AppError("No document with this ID could be found!", 404)
      );
    }

    res.status(200).json({
      status: "Success",
      message: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body);

    if (!document) {
      return next(
        new AppError("No document with this ID could be found!", 404)
      );
    }

    res.status(200).json({
      status: "Success",
      message: "Document successfully updated",
      payload: {
        data: document,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const newDocument = await Model.create(req.body);

    res.status(200).json({
      status: "Success",
      message: "New document successfully created",
      payload: {
        data: newDocument,
      },
    });
  });

exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const document = await query;

    if (!document) {
      return next(
        new AppError("No document with this ID could be found!", 404)
      );
    }

    res.status(200).json({
      status: "Success",
      message: document,
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    const documents = await Model.find();

    res.status(200).json({
      status: "Success",
      results: documents.length,
      payload: {
        data: documents,
      },
    });
  });
