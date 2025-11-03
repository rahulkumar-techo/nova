
const envConfig = {
    google:{
        google_client_id:process.env.GOOGLE_CLIENT_ID||"",
        google_secret__id:process.env.GOOGLE_SECRET_ID||"",
        google_callback:process.env.CALLBACK_URL||"",
        gemini_api:process.env.GEMINI_API_KEY||""
    },
    cloudinary:{

    },
    mongo:{
        url:process.env.MONGODB_URI||""
    },
    secrets:{
        next_secrets:process.env.NEXTAUTH_SECRET||""
    }
}

export default envConfig;