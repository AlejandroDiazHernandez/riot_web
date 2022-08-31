import type { NextApiRequest, NextApiResponse } from 'next'
import { DUMMY_NEWSLETTER } from '../../../data'

type newsletterData = {
	title?: string
	subtitle?: string
	image?: string
	message?: string
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<newsletterData>,
) {
	const { id } = req.query
	const filtered = DUMMY_NEWSLETTER.filter((newData) => newData.id === id)

	if (filtered.length > 0) {
		res.status(200).json(filtered[0])
	} else {
		res.status(404).json({ message: `Theres no news with id: ${id}` })
	}
}
