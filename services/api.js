import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://rmoszxluwoiczmjtydxg.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtb3N6eGx1d29pY3ptanR5ZHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwODQ2MTMsImV4cCI6MjAyMDY2MDYxM30.Ap-H6E2U59oAEqFe1yreAE_yy-VfjZFVuCxr7AK4peE",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtb3N6eGx1d29pY3ptanR5ZHhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUwODQ2MTMsImV4cCI6MjAyMDY2MDYxM30.Ap-H6E2U59oAEqFe1yreAE_yy-VfjZFVuCxr7AK4peE"
    }
})