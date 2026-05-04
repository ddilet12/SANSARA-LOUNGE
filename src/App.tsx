/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Calendar, 
  MapPin, 
  Clock, 
  Phone, 
  Star, 
  Music, 
  Beer, 
  Utensils, 
  ChevronRight, 
  Instagram, 
  Menu as MenuIcon, 
  X,
  CheckCircle2,
  Quote
} from 'lucide-react';

// --- Constants ---
const CONTACT_PHONE = "+77000222875";
const WHATSAPP_LINK = `https://wa.me/77000222875?text=${encodeURIComponent("Здравствуйте, хочу забронировать стол в Sansara Lounge")}`;
const INSTAGRAM_URL = "https://www.instagram.com/sansara.ala";
const TOUR_3D_URL = "https://yandex.kz/maps/162/almaty/?ll=76.936835%2C43.248673&panorama%5Bdirection%5D=264.983521%2C2.019444&panorama%5Bfull%5D=true&panorama%5Bpoint%5D=76.936835%2C43.248673&panorama%5Bspan%5D=115.088307%2C60.000000&utm_content=link_in_bio&utm_medium=social&utm_source=ig&z=10";
const LOGO_URL = "https://instagram.fala4-1.fna.fbcdn.net/v/t51.82787-19/597903452_17919851871213266_1554400417096631310_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby40MDQuZXhwZXJpbWVudGFsIn0&_nc_ht=instagram.fala4-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2gGey9bBxywGOWUdYNZTck5FM1yHMof4n-f9P-rqOpxwcLa9wp0eNLu68v1BUN3sLA0&_nc_ohc=uw4yO6vyvTkQ7kNvwHyWFOn&_nc_gid=kyLXKrwhCkhWuX95GvDqiA&edm=APoiHPcBAAAA&ccb=7-5&oh=00_Af6abDnUh3jTA6dmRGxY40C_VpJTsl91XN-v3B0bNNTzWg&oe=69FE2FC1&_nc_sid=22de04";

const PROMOS = [
  { day: "Пн-Чт", title: "Cocktail Night", desc: "2+1 на все авторские коктейли. Работаем до 02:00" },
  { day: "Пт-Сб", title: "Weekend Vibe", desc: "Живая музыка и DJ-сеты до самого утра. Работаем до 04:00" },
  { day: "Воскресенье", title: "Hookah Day", desc: "Скидка -20% на второй кальян. Работаем до 02:00" },
  { day: "Every Day", title: "Football Live", desc: "Прямые трансляции топовых матчей на больших экранах" },
];

const REVIEWS = [
  { name: "Алихан", text: "Лучшее место для отдыха в Алматы. Атмосфера просто нереальная, звук живой музыки выше всяких похвал.", rating: 5 },
  { name: "Елена", text: "Очень вкусная кухня и вежливый персонал. Бронировали стол на день рождения — все прошло идеально.", rating: 5 },
  { name: "Диас", text: "Шикарный выбор коктейлей и отличные кальяны. Теперь это наше любимое место по выходным.", rating: 5 },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Background Blurs */}
      <div className="bg-blob-gold" />
      <div className="bg-blob-orange" />

      {/* --- Sticky Header --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-dark-bg/60 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              <img 
                src={LOGO_URL} 
                className="w-12 h-12 rounded-full border border-gold/30 object-cover" 
                alt="Sansara Logo"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-gold uppercase tracking-[0.2em] leading-none">SANSARA</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 mt-1">Lounge Resto-Bar</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <a href="#about" className="nav-link">Атмосфера</a>
              <a href="#menu" className="nav-link">Меню</a>
              <a href="#promos" className="nav-link">Акции</a>
              <a href="#tour" className="nav-link">3D Тур</a>
              <a href="#contacts" className="nav-link">Контакты</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden xl:block text-right">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Наурызбай батыра, 85</p>
              <p className="text-[11px] font-medium opacity-80 leading-tight">
                Пн-Чт 11:00-02:00<br/>
                Пт-Сб 13:00-04:00
              </p>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              className="hidden md:flex btn-primary !py-2.5 !px-6"
            >
              Бронь стола
            </a>
            <button 
              className="lg:hidden text-white p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Nav Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-dark-bg flex flex-col items-center justify-center gap-8 text-2xl font-serif"
          >
            <button className="absolute top-8 right-8" onClick={() => setIsMenuOpen(false)}><X className="w-8 h-8" /></button>
            <a href="#about" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Атмосфера</a>
            <a href="#menu" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Меню</a>
            <a href="#promos" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Акции</a>
            <a href="#contacts" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Контакты</a>
            <a href={WHATSAPP_LINK} className="btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>
              Забронировать
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- (7/5 Grid Pattern) */}
      <section className="relative min-h-screen flex items-center pt-24">
        <div className="container mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-12 gap-0 items-center min-h-[80vh]">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center py-12 lg:py-0">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gold">4.9 | 3337 отзывов</span>
                </div>
                
                <h1 className="text-[64px] md:text-[96px] leading-[0.9] font-serif font-light mb-8 -tracking-tight">
                  Почувствуй<br/>
                  <span className="italic text-gold opacity-90">вкус</span> релакса
                </h1>
                
                <p className="text-lg md:text-xl text-white/50 max-w-md mb-12 font-light leading-relaxed">
                  Живая музыка, изысканная кухня и премиальный сервис в самом сердце Алматы. Ваше идеальное место для вечера.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <a 
                    href={WHATSAPP_LINK} 
                    className="group flex items-center gap-4 bg-[#25D366] text-white pl-8 pr-5 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(37,211,102,0.2)] w-full sm:w-auto"
                  >
                    <span className="font-bold uppercase tracking-widest text-xs">Написать в WhatsApp</span>
                    <div className="bg-white/20 p-2 rounded-full">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                  </a>
                  <div className="hidden sm:block text-[11px] tracking-[0.2em] uppercase opacity-40 border-l border-white/20 pl-8 leading-loose">
                    Осталось <span className="text-gold font-bold">4 стола</span><br/>на сегодня
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Visuals (5 cols) */}
            <div className="lg:col-span-5 relative hidden lg:flex items-center h-full py-12">
              <div className="grid grid-cols-2 gap-4 w-full h-[540px]">
                <div className="col-span-2 glass-card overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" 
                    alt="Atmoshere" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-10">
                    <p className="text-gold text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Daily Experience</p>
                    <h3 className="text-3xl font-serif">Живая музыка каждый вечер</h3>
                  </div>
                </div>
                
                <div className="col-span-2 bg-gold rounded-[32px] p-8 flex flex-col justify-between text-black group hover:bg-gold-light transition-colors shadow-[0_10px_30px_rgba(193,154,107,0.2)]">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-black tracking-widest opacity-50">Hot Promo</p>
                    <p className="text-3xl font-serif italic -mt-1">Cocktail Hour</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest mb-1">-20% на BAR</p>
                    <p className="text-[10px] opacity-70 uppercase tracking-tighter">С 16:00 до 19:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES / TRUST BAR (Simplified) --- */}
      <section className="py-20 border-y border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Music, text: "Живая музыка", sub: "Вокал & DJ" },
              { icon: Utensils, text: "Кухня", sub: "Авторское меню" },
              { icon: Beer, text: "Hookah Zone", sub: "Premium кальяны" },
              { icon: Clock, text: "График", sub: "До 02:00 ночи" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                <item.icon className="w-6 h-6 text-gold opacity-50" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">{item.text}</h4>
                  <p className="text-[11px] opacity-40 uppercase tracking-widest mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[10px] font-bold tracking-[0.4em] text-gold uppercase block mb-6">Атмосфера релакса</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-10 leading-tight">
                Больше, чем просто <span className="italic opacity-60">Бар</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 font-light leading-relaxed max-w-xl">
                Мы создали пространство, где эстетика встречается с комфортом. Каждая деталь интерьера, каждый звук и каждый вкус в Sansara Lounge направлен на то, чтобы вы могли полностью отключиться от городской суеты.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-3">Premium</h4>
                  <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">Интерьер от ведущих дизайнеров города</p>
                </div>
                <div>
                  <h4 className="text-gold font-bold text-sm uppercase tracking-widest mb-3">Service</h4>
                  <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">Персональный подход к каждому гостю</p>
                </div>
              </div>
              <a href={WHATSAPP_LINK} className="btn-secondary w-fit">Забронировать отдых</a>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-12 gap-4">
              <div className="col-span-7 pt-12">
                <img src="https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-2xl" alt="Lounge" />
              </div>
              <div className="col-span-5 relative">
                <img src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&q=80&w=600" className="rounded-3xl shadow-xl mt-[-20%]" alt="Cocktail" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold/10 rounded-full blur-[60px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROMOS --- */}
      <section id="promos" className="py-32 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-5xl font-serif mb-4 italic text-gold">Ежедневные <span className="text-off-white not-italic">Акции</span></h2>
              <p className="text-white/40 uppercase text-[11px] tracking-[0.3em]">Сделайте каждый свой визит особенным</p>
            </div>
            <div className="bg-white/5 px-6 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-gold animate-pulse">
              Life is better at Sansara
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROMOS.map((promo, idx) => (
              <div key={idx} className="glass-card group p-10 hover:border-gold/40 transition-colors cursor-pointer flex flex-col justify-between min-h-[300px]">
                <div>
                  <p className="text-gold text-[10px] uppercase font-black tracking-[0.3em] mb-8">{promo.day}</p>
                  <h3 className="text-3xl font-serif mb-4 leading-tight">{promo.title}</h3>
                </div>
                <p className="text-xs text-white/40 uppercase tracking-widest leading-loose">{promo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3D TOUR SECTION --- */}
      <section id="tour" className="py-32 relative group">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-[0.5em] text-gold uppercase block mb-4">Виртуальный визит</span>
            <h2 className="text-5xl font-serif mb-4">Наш <span className="italic opacity-60">Интерьер</span></h2>
            <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Исследуйте атмосферу Sansara Lounge в 360°</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative glass-card p-4 md:p-8 overflow-hidden aspect-video min-h-[400px] md:min-h-[600px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/5"
          >
            <div className="absolute inset-0 bg-gold/5 pointer-events-none z-10" />
            <iframe 
               src={TOUR_3D_URL}
               className="w-full h-full rounded-[24px] border-0 grayscale-[20%] contrast-[110%] relative z-20"
               allowFullScreen
               loading="lazy"
            />
            {/* Elegant Corner Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-gold/20 m-12 pointer-events-none rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-gold/20 m-12 pointer-events-none rounded-bl-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CONTACTS --- */}
      <section id="contacts" className="py-32 relative overflow-hidden">
        <div className="bg-blob-orange opacity-[0.05] top-1/2 left-0" />
        <div className="container mx-auto px-6">
          <div className="glass-card overflow-hidden grid lg:grid-cols-12 gap-0 border-white/5">
            <div className="lg:col-span-5 p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-serif mb-8 leading-tight italic text-gold">Бронирование <span className="text-off-white not-italic">Столов</span></h2>
                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-2xl text-gold"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Где мы находимся</p>
                      <p className="text-[14px] font-medium tracking-wide">Наурызбай батыра, 85, Алматы</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-2xl text-gold"><Clock className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Режим работы</p>
                      <p className="text-[14px] font-medium tracking-wide">
                        Пн-Чт 11:00 – 02:00<br/>
                        Пт-Сб 13:00 – 04:00<br/>
                        Вс 13:00 – 02:00
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-white/5 rounded-2xl text-gold"><Phone className="w-5 h-5" /></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Телефон для связи</p>
                      <p className="text-[14px] font-medium tracking-wide">{CONTACT_PHONE}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-4">
                 <a href={WHATSAPP_LINK} className="btn-primary flex-1">Забронировать</a>
                 <a href={INSTAGRAM_URL} className="aspect-square bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center p-4 transition-colors">
                  <Instagram className="w-5 h-5" />
                 </a>
              </div>
            </div>

            <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[400px] opacity-80 grayscale active:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.5651586526116!2d76.936665715485!3d43.25000007913702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836e963ecf0e0f%3A0xe54d85db6864e460!2z0YPQuy4g0J3QsNGD0YDRi9C30LHQsNC5INCx0LDRgtGL0YDQsCA4NSwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sru!4v1690000000000!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.6)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Pill Markers) --- */}
      <footer className="px-10 py-16 border-t border-white/5 flex flex-col gap-12 items-center text-[11px] uppercase tracking-[0.2em] text-white/30">
        <div className="flex flex-col items-center gap-6">
          <img 
            src={LOGO_URL} 
            className="w-16 h-16 rounded-full border border-gold/20 mb-2" 
            alt="Sansara Logo"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex items-center gap-3">
            <span className="text-gold animate-pulse">●</span>
            <span>Kitchen open until 01:30</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold animate-pulse">●</span>
            <span>Hookah Zone Available</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gold animate-pulse">●</span>
            <span>Dress Code: Smart Casual</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6 mt-8 pt-8 border-t border-white/5 opacity-50">
          <div className="flex items-center gap-10">
            <a href={INSTAGRAM_URL} className="hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-gold transition-colors">Menu PDF</a>
          </div>
          <span>© {new Date().getFullYear()} Sansara Lounge Almaty • Nauryzbai Batyra 85</span>
        </div>
      </div>
    </footer>

      {/* --- STICKY WHATSAPP BUTTON --- */}
      <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4 pointer-events-none sm:pointer-events-auto">
         <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 px-6 py-2.5 rounded-xl shadow-2xl mb-1 hidden md:block"
        >
          <p className="text-[10px] font-black text-gold uppercase tracking-[0.2em]">Ответим за 1 минуту</p>
        </motion.div>
        <a 
          href={WHATSAPP_LINK} 
          className="pointer-events-auto relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050505] animate-ping" />
        </a>
      </div>
    </div>
  );
}
