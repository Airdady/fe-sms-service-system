import mongoose from "mongoose";

const statSchema = new mongoose.Schema({
  ts: {
    type: Number,
    default: 0,
  },
  posts: String,
  deletes: String,
  id: String,
});

//ts as gets

const smsModal = mongoose.model("smsStart", statSchema);

export default smsModal;
