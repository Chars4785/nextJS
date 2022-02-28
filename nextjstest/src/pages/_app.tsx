import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import 'antd/dist/antd.css';
import CustomLayout from '../components/blocks/CustomLayout/CustomLayout';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  ) 
}

export default MyApp
