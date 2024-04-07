import bioImg from '../assets/bio.jpg'
import { TypeAnimation } from 'react-type-animation'

const AboutMe = () => {
  return (
      <div id='about-me' className='bg-black text-white py-12'>
          <div className='max-w-[1280px] h-full mx-auto grid grid-cols-2 items-center justify-items-center gap-4'>
              <img src={bioImg} className='w-[60%]' alt="bio" />
              <div className='flex flex-col items-center gap-4'>
                <p className='font-bold text-3xl'>UTESHOVA ZERNE HÚRMETILLAEVNA</p>
                <p className='font-bold text-center'>Berdaq atındağı Qaraqalpaq mámleketlik universiteti Inglis tili hám ádebiyatı kafedrası baslığı, filologiya ilimleri kandidatı, docent</p>
                <p className='text-stone-400'>
                <TypeAnimation sequence={[`Uteshova Zerne Húrmetillaevna 1982-jılı 26-oktyabrde Nókis qalasında tuwilgan. 2005-jılı Qaraqalpaq mámleketlik universitetin shet tili hám ádebiyatı baģdarın tamamlap, sol jılı Qaraqalpaq mámleketlik universitetiniń Inglis filologiyası kafedrası assistenti lawazımına jumısqa alındı. 2005-2008-jılları Ózbekstan mámleketlik Jáhán tilleri universiteti "Tillar o'qitish metodikasi" kafedrası kúndizgi bólimi aspirantı bolgan. Ol 2009-2010- jıllarda Qaraqalpaq mámleketlik universitetinin Inglis filologiyası kafedrası aspiranti lawazımında jumıs islep, kandidatlıq dissertaciyasın tabıslı jaqlagan. 2010- 2020-jılları Qaraqalpaq mámleketlik universitetinin «Inglis filologiyası» kafedrası docenti bolıp islep, 2020-jılınan baslap házirgi waqıtqa shekem Qaraqalpaq mámleketlik universitetiniń «Inglis tili hám ádebiyatı kafedrası baslığı, docent bolıp islep kelmekte. Ol sırt el hám Respublika kólemindegi jurnallarda basıp shıģarılģan 85 ilimiy tezis hám maqalalar, 12 oqiw qollanba avtorı. Bir neshe márte ilimiy konferenciyalarda bayanatlar menen qatnasqan. Ol Ullı Britaniya mámleketinde (online) hám Ózbekistan Respublikası Joqarı hám Orta Arnawlı Bilim Ministrligi, Ózbekstan mámleketlik jáhán tilleri universiteti janındağı kadrlardı qayta tayarlaw hám olardıń tajriybesin asırıw orayında tajriybesin asırıw kurslarına qatnasqan. Sonday-aq, Uteshova Zerne Hurmetillaevna hámde shákirti Matmuratova Sarbinaz Azatovna birgelikte shıģargan maqalası ushın 2023-jılı "ILM FAN IFTIXORI" estelik ko'krek nishanları menen siylıqlandı.`]} />
                </p>
              </div>
          </div>
      </div>
  )
}

export default AboutMe