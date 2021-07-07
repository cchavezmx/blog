/* eslint-disable indent */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'

export default function relativeImages (req, res) {
  try {
    const relativeFolder = 'socios'
    const dir = path.resolve('./public', relativeFolder)
    const fileName = fs.readdirSync(dir)

    res.status(200).json({ message: fileName })
  } catch (error) {
    res.status(400).json({ error: error })
  }
}
