import type { NextApiRequest, NextApiResponse } from 'next'
import { DUMMY_GAMES } from '../../../data'

type GameData = {
	title: string
	image: string
	url: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<GameData[]>,
) {
	res.status(200).json(DUMMY_GAMES)
}
