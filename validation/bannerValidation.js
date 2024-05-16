import zod from "zod";

const bannerSchema = zod.object({
  image: zod.string({ required_error: "Image is required" }),

  title: zod.string({ required_error: "Title is required" }),

  link: zod.string({ required_error: "Link is required" }),
});


export { bannerSchema }