import aws, { S3 } from "aws-sdk";
import mime from "mime";
import path from "path";
import AppError from "../errors/AppErrors";
import fs from "fs"


class S3Storage {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
    });
  }
  

  async saveFile(filename: string): Promise<void>{
    const originalPath = path.resolve("tmp", filename)

    const ContentType = mime.getType(originalPath);

    if(!ContentType) throw new AppError("File not found", 400)

    const fileContent = await fs.promises.readFile(originalPath);

    this.client.putObject({
        Bucket: "autocarapi",
        Key: filename,
        ACL: "public-read",
        Body: fileContent,
        ContentType,
        
    }).promise();

    await fs.promises.unlink(originalPath);

  }
}

export default S3Storage;


// id: AKIA4SJC6FGE4T2BC3A2
// key: hC7tiU2QDWq8BsCfS2C5k7fMUm4KqTDXzO5WNQQn