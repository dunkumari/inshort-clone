
import mongoose from "mongoose";


const Connection =  async( username , password) => {
    const URL = `mongodb+srv://${username}:${password}@inshort-clone.x281pg7.mongodb.net/?retryWrites=true&w=majority`;
    try {

        await mongoose.connect(URL , { useNewUrlParser: true });
        console.log('database connecteed successfully');


    } catch(error){
        console.log('Error while connecting the dabase' , error);
    }
}

export default Connection;