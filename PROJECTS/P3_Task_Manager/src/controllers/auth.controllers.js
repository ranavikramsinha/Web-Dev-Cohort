import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;

  //* validation
  registerationValidation(body);
});

export { registerUser };
