export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "All feedback here" });
  } else if (req.method === "POST") {
    res.status(201).json({ message: "Feedback created!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
