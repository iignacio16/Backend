import { Weather, Visibility } from './enums'
export interface DiaryEntry { // Como contrato que necesita un objeto //ventaja: pueden ser extendidas
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// Hacer como un type de dato a recibir que sea igual que DiaryEntry pero que omita el comment. 2 formas:

// 1:export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
// 2:
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
