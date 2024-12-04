// import axios from "axios";

// export const axiosConfig = axios.create({
//     baseURL: "http://localhost:3000",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
// });

import axios from "axios";

export const axiosConfig = axios.create({
    baseURL: "https://uioxugtlgudsoxwvfnsb.supabase.co/rest/v1",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "apikey": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpb3h1Z3RsZ3Vkc294d3ZmbnNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjgxOTg4MSwiZXhwIjoyMDQ4Mzk1ODgxfQ.48JjtXBHgSz7JtitbulCD3iTNilH-gw3qSOjPHcS58w',
        "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpb3h1Z3RsZ3Vkc294d3ZmbnNiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjgxOTg4MSwiZXhwIjoyMDQ4Mzk1ODgxfQ.48JjtXBHgSz7JtitbulCD3iTNilH-gw3qSOjPHcS58w',
    },
});

