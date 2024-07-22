import { ctrlWrapper } from '../utils/ctrlWrappaer.js';
import {
  findContactsController,
  findContactByIdController,
  createContactController,
  deleteContactController,
  upsertContactController,
  patchContactController
} from '../controllers/contacts.js';
import express from "express";
import { validateBody } from '../middlewares/validateBody.js';
import { createContactValidationSchema, updateContactValidationSchema } from '../validation/contacts.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/', ctrlWrapper(findContactsController));
router.get('/:contactId', ctrlWrapper(findContactByIdController));
router.post('/', jsonParser, validateBody(createContactValidationSchema), ctrlWrapper(createContactController));
router.delete('/:contactId', ctrlWrapper(deleteContactController));
router.put('/:contactId', jsonParser, validateBody(updateContactValidationSchema), ctrlWrapper(upsertContactController));
router.patch('/:contactId', jsonParser, validateBody(updateContactValidationSchema), ctrlWrapper(patchContactController));

export default router;
