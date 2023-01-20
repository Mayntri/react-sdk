import { useInfiniteQuery } from '@tanstack/react-query'
import { getAllMerchants } from '@mayntri/sdk'

export const useMerchants = () => {
  const result = useInfiniteQuery({
    queryKey: ['merchants'],
    queryFn: () => getAllMerchants(),
  })

  return result
}
