import cloudinary from "./cloudinary";

const uploadImage = (file) => {
    return new Promise((resolve, reject) => {        
        cloudinary.uploader.upload(file.path, (error, result) => {
            if (error) {
                console.log(error);
                reject("Image not uploaded");
            } else {
                resolve(result.url);
                console.log("image uploaded successfully");
            }
        });
    });
};

export { uploadImage }