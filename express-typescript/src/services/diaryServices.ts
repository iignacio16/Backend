import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[] // Es indicarle a ts que se que estoy trabajando con esos types

export const getEntries = (): DiaryEntry[] => diaries // Para devolver las entradas del diario

// Hacer un getentries pero sin una variable que contenga el una entrada, es decir p.j. sin comentario
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  }) // Hay que reccorrer el array diaries, y devolver los parámetros que queremos
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: diaries.length + 1, // Si id ordenados, si son id desordenados: //Math.max(...diaries.map(d => d.id)) + 1;
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
} // Para añadir una entry
