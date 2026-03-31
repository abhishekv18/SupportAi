// import mongoose,{ model,Schema } from "mongoose";

// interface ISettings{
//     ownerId:string,
//     businessName:string,
//     businessEmail:string,
//     knowledge:string,
// }


// const seetingsSchema=new Schema<ISettings>({
//     ownerId:{type:String,required:true,unique:true},
//     businessName:{type:String,required:true},
//     businessEmail:{type:String,unique:true},
//     knowledge:{type:String,default:""},


// },{
//     timestamps:true
// });

// const Seetings=mongoose.models.Seetings || model<ISettings>("Seetings",seetingsSchema);

// export default Seetings;
import mongoose, { model, Schema } from "mongoose";

interface ISettings {
  ownerId: string;
  businessName: string;
  businessEmail: string;
  knowledge: string;
}

const seetingsSchema = new Schema<ISettings>({
  ownerId:       { type: String, required: true, unique: true },
  businessName:  { type: String, required: true },
  businessEmail: { type: String, unique: true },
  knowledge:     { type: String, default: "" },
}, { timestamps: true });

// ✅ Force clear the cached model
if (mongoose.models.Seetings) {
  delete mongoose.models.Seetings;
}

const Seetings = model<ISettings>("Seetings", seetingsSchema);

export default Seetings;