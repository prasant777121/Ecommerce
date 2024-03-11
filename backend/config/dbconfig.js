const mongoose=require('mongoose')

const mongoURI ="mongodb+srv://prashannamaharjan10:O5rlYmXex4gj5KmV@cluster0.fojcrm5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



const connection =async()=>{
  await mongoose.connect(mongoURI)
  console.log('scucc')
}

module.exports = connection;
