interface Props {
  fetch: {
    breakingNews: boolean
    comments: string
    date: string
    details: string
    detailsweb: string
    externalId: string
    firstSentence: string
    geotags: []
  }[]
}

export default function NewsTable({ fetch }: Props) {}
