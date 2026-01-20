# CSR (Client Side Rendering):
- Data is fetched on the browser after page load
- Backend sends JSON data (array of objects)
- Initial load is slow
- SEO is weaker because content loads later

# SSR (Server Side Rendering):
- Data is fetched on the server
- Server sends complete HTML
- First page load is fast
- SEO is strong

# Why API handling is necessary:
- Backend data comes in JSON format
- Frontend calls API to get data
- API acts as a bridge between backend and frontend

Axios:
- Axios is a library used to call APIs
- It helps fetch and send data easily

| Feature    | CSR             | SSR              |
| ---------- | --------------- | ---------------- |
| Rendering  | Browser         | Server           |
| SEO        | Weak            | Strong           |
| First Load | Slow            | Fast             |
| Data Load  | After page load | Before page load |
| Example    | React SPA       | Next.js          |
