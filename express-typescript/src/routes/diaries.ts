import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id) // El mas es porque los params son strings y hay que pasarlos a number, porque
  // findById(), le tienes que pasar un number
  return (diary !== null) // Esto es como un if
    ? res.send(diary) // Esto es si no se cumple la condicion del if, hace eso
    : res.sendStatus(404) // Si se cumple el la condicion del if, hace eso
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
