import { body } from "express-validator";

const userRegisterationValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3 })
      .withMessage("username minimum length should be at least 3 character")
      .isLength({ max: 16 })
      .withMessage("username maximum length should be at max 16 characters"),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").notEmpty().withMessage("Password should not be empty"),
  ];
};

export { userRegisterationValidator, userLoginValidator };
