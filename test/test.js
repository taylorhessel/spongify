let should = require('chai').should(),
    spongify = require('../index'),
    convert = spongify.convert

describe('#spongify', () => {
  it('converts alphabetic characters correctly', () => {
    convert('Hippopotamus').should.equal('HiPpOpOtAmUs');
  })
  it('skips whitespace during conversion', () => {
    convert('Testing   white   space').should.equal('TeStInG   wHiTe   SpAcE');
  })
  it('skips non-alphabetic characters during conversion', () => {
    convert("I don't think your parents would've approved of that!  How could you?").should.equal("I dOn'T tHiNk YoUr PaReNtS wOuLd'Ve ApPrOvEd Of ThAt!  HoW cOuLd YoU?");
  })
})
