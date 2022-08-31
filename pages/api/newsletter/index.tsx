import type { NextApiRequest, NextApiResponse } from 'next'
import { DUMMY_NEWSLETTER } from '../../../data'

type newsletterData = {
	id: string
	title: string
	subtitle: string
	image: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<newsletterData[]>,
) {
	res.status(200).json(DUMMY_NEWSLETTER)
}
