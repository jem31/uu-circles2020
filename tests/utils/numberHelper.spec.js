import * as numberHelpers from '@/util/numberHelper'

describe('util/numberHelper', () => {
  describe('randInt', () => {
    it('0か1を返す(正常系)', () => {
      for (let i = 0; i < 10; i++) {
        const result = numberHelpers.randNum(1) // 0 ~ 1

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(1) // result <= 1
      }
    })

    it('0以上5以下を返す(正常系)', () => {
      for (let i = 0; i < 100; i++) {
        const result = numberHelpers.randNum(5) // 0 ~ 5

        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(5) // result <= 5
      }
    })

    it('0のとき0を返す(正常系)', () => {
      const result = numberHelpers.randNum(0)

      expect(result).toBe(0)
    })

    it('負のとき0を返す(正常系)', () => {
      const result = numberHelpers.randNum(-10)

      expect(result).toBe(0)
    })
  })
})
