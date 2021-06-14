import { BigNumber } from '@ethersproject/bignumber'
import { Signer } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import { abi, address } from '../contract'
import useContract from './useContract'

export default function useQSTKSale(key?: string) {
  const contract = useContract(address, abi, key)
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0))
  const [started, setStarted] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!contract) return
    contract.qstkPrice().then(setPrice).catch(setError)
  }, [contract, setPrice])

  useEffect(() => {
    if (!contract) return
    contract.started().then(setStarted).catch(setError)
  }, [contract, setStarted])

  const getEthPrice = useCallback(
    (qstkAmount: BigNumber) => {
      if (!qstkAmount) return BigNumber.from(0)
      if (!price) return BigNumber.from(0)
      return qstkAmount.mul(price)
    },
    [price],
  )

  const purchase = useCallback(
    (qstkAmount: BigNumber, signer: Signer) => {
      if (!contract) throw new Error('not ready')
      return contract
        .connect(signer)
        .buyQStk(qstkAmount.mul(BigNumber.from(10).pow(18)), {
          value: getEthPrice(qstkAmount),
        })
    },
    [contract, getEthPrice],
  )

  return {
    started,
    error,
    price,
    getEthPrice,
    purchase,
    ready: !!contract
  }
}
