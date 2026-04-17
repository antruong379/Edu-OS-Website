import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Bot, 
  CheckCircle2, 
  CreditCard, 
  Database, 
  Play,
  XCircle,
  Mail,
  Volume2,
  VolumeX,
  Calendar,
  MessageSquare,
  Users,
  BarChart,
  Zap,
  Server,
  Share2,
  Network,
  LayoutDashboard,
  BellRing,
  FileCheck,
  ChevronDown,
  AlertTriangle,
  TrendingDown,
  Search,
  User
} from 'lucide-react';
import { motion } from 'motion/react';

const faqs = [
  {
    question: "Tôi và nhân sự không rành về công nghệ thì có dùng được không?",
    answer: "Hoàn toàn được. Hệ thống được thiết kế để bạn quản lý tập trung trên một ứng dụng chuyên nghiệp (có sẵn trên Desktop và Mobile). Mọi luồng kỹ thuật phức tạp đã được xử lý chạy ngầm, nhân sự chỉ cần thao tác trên giao diện quen thuộc."
  },
  {
    question: "Chi phí sử dụng hệ thống này được tính như thế nào?",
    answer: "Chi phí gồm 2 phần minh bạch: (1) Phí thiết lập một lần cho việc đóng gói module và (2) Phí duy trì nền tảng (nếu có) trả trực tiếp cho các công cụ SaaS. Tôi sẽ tư vấn cấu hình để bạn tối ưu chi phí ở mức thấp nhất."
  },
  {
    question: "Trung tâm của tôi quy mô nhỏ, liệu có cần dùng hệ thống này chưa?",
    answer: "Càng nhỏ, bạn càng cần tinh gọn để tối ưu nhân sự. Bạn có thể bắt đầu bằng những module nhỏ nhất để thấy ngay hiệu quả về thời gian và sự chuyên nghiệp trước khi mở rộng quy mô."
  },
  {
    question: "Dữ liệu của tôi có được bảo mật không?",
    answer: "Chắc chắn. Toàn bộ dữ liệu nằm trên tài khoản nền tảng do chính bạn sở hữu. Tôi chỉ thiết lập luồng vận hành, bạn nắm quyền kiểm soát tuyệt đối thông tin khách hàng và tài chính của mình."
  },
  {
    question: "Quy trình của trung tâm tôi hơi đặc thù, có tùy biến được không?",
    answer: "Đó là ưu điểm của mô hình Module. Tôi sẽ không ép bạn dùng một hệ thống cứng nhắc mà sẽ lựa chọn, lắp ghép các công cụ linh hoạt để khớp chính xác với nghiệp vụ thực tế của bạn."
  },
  {
    question: "Sau khi bàn giao, tôi có được hỗ trợ gì không?",
    answer: "Hệ thống đi kèm Video hướng dẫn và quy trình chuẩn (SOP) chi tiết để bạn đào tạo nhân sự mới nhanh chóng. Tôi cũng hỗ trợ kỹ thuật để đảm bảo các module luôn vận hành ổn định."
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted && videoRef.current) {
        videoRef.current.currentTime = 0;
    }
  };

  const moduleFlows = [
    {
      id: 'ketoan',
      title: 'KẾ TOÁN & THANH TOÁN',
      desc: 'Tích hợp webhook ngân hàng, báo nhận tiền tự động không độ trễ.',
      trigger: { icon: CreditCard, label: "Phụ huynh CK\nhọc phí" },
      main: { icon: Server, label: "Webhook\nNgân Hàng", sub: "Auto Deduct" },
      conditions: "Kiểm tra\nmã đối chiếu",
      outputs: [
        { icon: Database, label: "Báo cáo dòng tiền\ntự động" },
        { icon: MessageSquare, label: "Gửi xác nhận thanh toán\nhọc viên" }
      ]
    },
    {
      id: 'giaonopbai',
      title: 'GIAO - NỘP BÀI TỰ ĐỘNG',
      desc: 'Tạo hồ sơ, lên lịch giao bài định kỳ, thu bài và cảnh báo nhắc nhở tự động.',
      trigger: { icon: Users, label: "Học viên\nđăng ký" },
      main: { icon: FileCheck, label: "Tạo Hồ Sơ\n& Giao Bài Zalo", sub: "Scheduled Job" },
      conditions: "Bắt trạng thái\nnộp bài",
      outputs: [
        { icon: LayoutDashboard, label: "Đã nộp: Lên\nDashboard chấm" },
        { icon: BellRing, label: "Chưa nộp: Vòng\nlặp cảnh báo" }
      ]
    },
    {
      id: 'chamsoc',
      title: 'CHĂM SÓC TỰ ĐỘNG',
      desc: 'Tự động nhắc lịch, gửi thông báo qua zalo, mess..chăm sóc khách hàng.',
      trigger: { icon: Calendar, label: "Đến lịch thu\nhọc phí" },
      main: { icon: Bot, label: "AI Agent", sub: "Logic Automation" },
      conditions: "Lọc trạng thái\nchưa đóng",
      outputs: [
        { icon: MessageSquare, label: "Gửi kịch bản\nZalo thông báo" },
        { icon: Zap, label: "Tag quản lý\nđể báo cáo" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-brand-500 selection:text-black overflow-x-hidden relative text-slate-300">
      
      {/* GLOBAL BACKGROUND NOISE */}
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-overlay z-0"></div>

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6 w-full">
        <div className="flex items-center gap-12">
          <span className="text-white font-display font-bold text-xl sm:text-2xl tracking-widest uppercase flex items-center gap-2">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-brand-500"></div>
            EDU<span className="text-brand-500">OS</span>
          </span>
        </div>
        <a 
          href="#cta-footer"
          className="bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm hover:bg-brand-500 hover:text-black transition-colors"
        >
          Tư Vấn
        </a>
      </nav>

      {/* 1. HERO & VSL SECTION (Sleek 1-Screen) */}
      <section className="relative min-h-[100dvh] pt-24 pb-16 lg:pb-40 flex flex-col items-center justify-center border-b border-[#1f1f1f] overflow-hidden">
        
        {/* Subtle background glow mimicking the reference */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-500/15 via-brand-900/5 to-transparent pointer-events-none z-0"></div>

        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center px-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8 flex flex-col items-center"
          >
            <h1 className="text-3xl leading-[1.25] sm:text-5xl md:text-5xl lg:text-[4rem] md:leading-[1.2] font-sans font-medium text-white tracking-tight flex flex-col sm:block items-center">
              <span className="mb-1 sm:mb-0">Dành cho thế hệ</span>
              <span className="bg-brand-500 text-black px-3 py-1 sm:py-0.5 rounded-xl inline-block font-semibold sm:mx-2 whitespace-nowrap">Edu-Preneur mới</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-300 font-sans max-w-3xl mx-auto px-2">
              Thoát khỏi vận hành thủ công, điều hành trung tâm từ bất cứ đâu.
            </p>
          </motion.div>

          {/* TRUST BADGE */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.1 }}
             className="flex items-center gap-2 md:gap-4 border border-[#1f1f1f] bg-[#050505]/50 backdrop-blur-sm rounded-full p-1.5 pr-4 sm:p-2 sm:pr-5 md:pr-8 mb-8 shadow-xl max-w-full"
          >
            <div className="flex -space-x-2 shrink-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-[#111] flex items-center justify-center text-slate-400">
                <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-[#111] flex items-center justify-center text-slate-400">
                <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-[#111] flex items-center justify-center text-slate-400">
                <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-brand-900/40 flex items-center justify-center text-brand-500">
                <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              </div>
            </div>
            <div className="flex flex-col items-start text-left ml-1">
              <span className="text-[9px] sm:text-[11px] md:text-sm text-slate-300 font-sans font-medium leading-[1.1] max-w-[120px] sm:max-w-[160px] md:max-w-none">Thiết kế bởi người thực chiến vận hành trung tâm</span>
              <div className="flex items-center gap-1 text-[#F59E0B] text-[8px] sm:text-[10px] md:text-xs font-semibold mt-0.5">
                ★★★★★ <span className="text-slate-400 ml-1">4.92/5</span>
              </div>
            </div>
          </motion.div>

          {/* VSL BENTO LAYOUT (Centered Video, Surrounding Floating Panels) */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center relative z-10 px-4 -mt-4">
            
            {/* The Main Video Container */}
            <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full aspect-video bg-[#0a0a0a] rounded-2xl relative overflow-hidden transition-all duration-700 cursor-pointer border-2 ${isMuted ? 'border-red-500/30' : 'border-brand-500/50'}`}
                onClick={handleMuteToggle}
              >
                <video 
                  ref={videoRef}
                  src="https://res.cloudinary.com/dtawhiogc/video/upload/v1776400344/andanceos_intro_video_r5jljk.mp4" 
                  className="w-full h-full object-cover transition-opacity duration-500" 
                  playsInline 
                  muted={isMuted} 
                  loop
                  autoPlay
                />
              </motion.div>

              {/* Subtitle / Controls Panel positioned OUTSIDE the video, directly below it */}
              <div className="w-[90%] md:w-[80%] h-12 md:h-14 mt-4 relative z-30 cursor-pointer" onClick={handleMuteToggle}>
                  {/* SET 1: PAIN SUBTITLE */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isMuted ? 1 : 0, scale: isMuted ? 1 : 0.95 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 flex items-center justify-between bg-[#050505]/90 backdrop-blur-xl border border-red-500/40 rounded-xl px-4 md:px-6 shadow-[0_4px_20px_rgba(239,68,68,0.2)] ${!isMuted ? 'pointer-events-none' : ''}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 group">
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-red-500 shrink-0" />
                      <span className="font-sans font-bold text-red-500 text-[10px] sm:text-xs md:text-sm tracking-wide group-hover:text-red-400 transition-colors whitespace-nowrap">Bật âm thanh <span className="hidden sm:inline">(Xem AI Auto)</span></span>
                    </div>
                    <div className="text-red-500/80 font-display uppercase tracking-widest text-[8px] sm:text-[9px] md:text-xs font-bold flex items-center gap-1 sm:gap-2 shrink-0">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded bg-gradient-to-br from-red-600 to-red-900 border border-red-500/30 flex items-center justify-center shadow-[inset_0_1px_3px_rgba(255,100,100,0.4),0_0_8px_rgba(239,68,68,0.3)]">
                        <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="animate-pulse whitespace-nowrap">AI AUTOMATION ĐANG TẮT</span>
                    </div>
                  </motion.div>

                  {/* SET 2: AUTOMATION SUBTITLE */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: !isMuted ? 1 : 0, scale: !isMuted ? 1 : 0.95 }}
                    transition={{ duration: 0.5, delay: isMuted ? 0 : 0.1 }}
                    className={`absolute inset-0 flex items-center justify-between bg-[#050505]/90 backdrop-blur-xl border border-brand-500/40 rounded-xl px-4 md:px-6 shadow-[0_4px_20px_rgba(34,197,94,0.25)] ${isMuted ? 'pointer-events-none' : ''}`}
                  >
                    <div className="flex items-center gap-2 md:gap-3 group">
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-brand-500 animate-pulse shrink-0" />
                      <span className="font-sans font-bold text-brand-500 text-[10px] sm:text-xs md:text-sm tracking-wide group-hover:text-brand-400 transition-colors whitespace-nowrap">Hệ thống đang phát</span>
                    </div>
                    <div className="text-brand-500 font-display uppercase tracking-widest text-[8px] sm:text-[9px] md:text-xs font-bold flex items-center gap-1 sm:gap-2 shrink-0">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded bg-gradient-to-br from-brand-500 to-[#104d00] border border-brand-400 flex items-center justify-center shadow-[inset_0_1px_3px_rgba(100,255,100,0.5),0_0_10px_rgba(57,255,20,0.4)]">
                        <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="animate-pulse whitespace-nowrap">HỆ THỐNG ĐANG CHẠY</span>
                    </div>
                  </motion.div>
                </div>

              {/* DYNAMIC FLOATING PANELS */}
              <div className="w-full relative mt-6 lg:mt-0 lg:absolute lg:inset-0 pointer-events-none z-20">
                
                {/* SET 1: PAIN STATE PANELS */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: isMuted ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-full flex justify-center lg:block relative lg:absolute lg:inset-0 ${!isMuted ? 'hidden lg:block' : ''}`}
                >
                  <div className="flex flex-col gap-3 w-full max-w-sm lg:max-w-none lg:w-full">
                    {/* Item 1 - Left Top */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }} className="lg:absolute lg:top-[15%] lg:-left-32 xl:-left-36 bg-[#050505]/95 backdrop-blur-md border border-red-500/40 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(239,68,68,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a0505] to-[#0a0000] border border-red-500/20 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(239,68,68,0.3),0_0_10px_rgba(239,68,68,0.1)]">
                        <Search className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Soi Bill thủ công <ArrowRight className="inline w-3 h-3 text-red-500 mx-1"/> Lạc data.
                      </p>
                    </motion.div>
                    
                    {/* Item 2 - Left Bottom */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} className="lg:absolute lg:bottom-[15%] lg:-left-24 xl:-left-28 bg-[#050505]/95 backdrop-blur-md border border-red-500/40 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(239,68,68,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a0505] to-[#0a0000] border border-red-500/20 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(239,68,68,0.3),0_0_10px_rgba(239,68,68,0.1)]">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Nhắc bài, gia hạn <ArrowRight className="inline w-3 h-3 text-red-500 mx-1"/> Mệt mỏi.
                      </p>
                    </motion.div>

                    {/* Item 3 - Right Middle */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="lg:absolute lg:top-[40%] lg:-right-36 xl:-right-44 bg-[#050505]/95 backdrop-blur-md border border-red-500/40 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(239,68,68,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1a0505] to-[#0a0000] border border-red-500/20 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(239,68,68,0.3),0_0_10px_rgba(239,68,68,0.1)]">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Nhân viên nghỉ <ArrowRight className="inline w-3 h-3 text-red-500 mx-1"/> Quy trình gãy.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* SET 2: AUTOMATION STATE PANELS */}
                <motion.div 
                  initial={false}
                  animate={{ opacity: !isMuted ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: isMuted ? 0 : 0.1 }}
                  className={`w-full flex justify-center lg:block relative lg:absolute lg:inset-0 ${isMuted ? 'hidden lg:block' : ''}`}
                >
                  <div className="flex flex-col gap-3 w-full max-w-sm lg:max-w-none lg:w-full">
                    {/* Item 1 - Left Top */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }} className="lg:absolute lg:top-[15%] lg:-left-32 xl:-left-36 bg-[#050505]/95 backdrop-blur-md border border-brand-500/50 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(34,197,94,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#051a05] to-[#000a00] border border-brand-500/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(57,255,20,0.3),0_0_10px_rgba(57,255,20,0.15)]">
                        <Zap className="w-4 h-4 text-brand-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Tự động báo cáo dòng tiền <ArrowRight className="inline w-3 h-3 text-brand-500 mx-1"/> Real time
                      </p>
                    </motion.div>
                    
                    {/* Item 2 - Left Bottom */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }} className="lg:absolute lg:bottom-[15%] lg:-left-24 xl:-left-28 bg-[#050505]/95 backdrop-blur-md border border-brand-500/50 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(34,197,94,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#051a05] to-[#000a00] border border-brand-500/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(57,255,20,0.3),0_0_10px_rgba(57,255,20,0.15)]">
                        <Bot className="w-4 h-4 text-brand-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Tự động nhắc lịch <ArrowRight className="inline w-3 h-3 text-brand-500 mx-1"/> Chuyên nghiệp.
                      </p>
                    </motion.div>

                    {/* Item 3 - Right Middle */}
                    <motion.div animate={{ y: [-3, 3, -3] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} className="lg:absolute lg:top-[40%] lg:-right-36 xl:-right-44 bg-[#050505]/95 backdrop-blur-md border border-brand-500/50 rounded-xl p-3 md:p-4 shadow-[0_4px_20px_rgba(34,197,94,0.2)] flex items-center gap-3 w-full lg:w-[260px] xl:w-[280px] pointer-events-auto">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#051a05] to-[#000a00] border border-brand-500/30 flex items-center justify-center shrink-0 shadow-[inset_0_1px_4px_rgba(57,255,20,0.3),0_0_10px_rgba(57,255,20,0.15)]">
                        <Database className="w-4 h-4 text-brand-500" />
                      </div>
                      <p className="font-sans text-white font-medium text-xs md:text-sm leading-snug">
                        Hệ thống làm việc <ArrowRight className="inline w-3 h-3 text-brand-500 mx-1"/> Không phụ thuộc.
                      </p>
                    </motion.div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT THE FOUNDER (3D Phone Cards) */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a] relative border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-16 border-b border-[#1f1f1f] pb-4"
          >
             <div className="w-8 h-8 bg-brand-500 flex items-center justify-center shadow-[4px_4px_0px_0px_#104d00]">
               <div className="w-4 h-4 bg-black"></div>
             </div>
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wider text-3d-white">TỪ "KHỔ CHỦ" ĐẾN EDU-PRENEUR</h2>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* 3D Statue/Founder Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative flex justify-center perspective-1000"
            >
              <div className="absolute inset-0 bg-brand-500/10 blur-[100px] z-0"></div>
              <motion.div 
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 w-full aspect-[3/4] bg-[#000] border-4 border-brand-950 shadow-[16px_16px_0px_0px_#104d00]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* User uploaded image goes here. Remove mix-blend-luminosity if you want full color */}
                <img 
                  src="https://res.cloudinary.com/dtawhiogc/image/upload/f_auto,q_auto/A7D2BFD2-CAB0-4712-AA42-C748AD35BB4E_rhifhf" 
                  alt="AnDanceOS - Chuyên gia xây dựng hệ thống AI Automation cho trung tâm đào tạo" 
                  className="w-full h-full object-cover opacity-90 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
            
            {/* 3D Phone Cards Side */}
            <div className="md:col-span-7 flex flex-col gap-8 perspective-1000">
              
              {/* Phone Card 1: Story */}
              <motion.div
                 initial={{ rotateX: 5, rotateY: -10 }}
                 whileInView={{ rotateX: 5, rotateY: -10 }}
                 whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02, z: 20 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="bg-[#050505] border-2 border-brand-500 shadow-[12px_12px_0px_0px_#104d00] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden"
                 style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#000] rounded-b-xl border-b border-brand-500/50 z-20 shadow-[0_2px_10px_rgba(57,255,20,0.2)]"></div>
                
                <h3 className="font-display text-4xl text-white uppercase mt-4 mb-6 relative z-10 text-3d-brand">TÔI TỪNG KIỆT SỨC...</h3>
                <div className="space-y-4 text-slate-300 font-sans relative z-10 font-medium">
                  <p>
                    Chào bạn, tôi là AnDanceOS. Với nhiều năm theo đuổi nghề và trực tiếp giảng dạy, tôi từng rơi vào cái bẫy: <strong className="text-brand-500">Quá tải vì giấy tờ, Excel, tính lương thủ công, và những tin nhắn nhắc học phí mệt mỏi.</strong>
                  </p>
                  <p>
                    Tôi nhận ra, mình chỉ là một "người làm thuê" cho chính đam mê của mình. Đó là lúc tôi quyết định đập đi xây lại toàn bộ.
                  </p>
                  <p>
                    Hệ thống AI Automation này là "vũ khí" tôi xây dựng cho chính mình, tự động hóa hoàn toàn thanh toán, nhắc lịch, và chăm sóc học viên. Giờ đây, tôi đóng gói nó lại cho bạn.
                  </p>
                </div>
              </motion.div>

              {/* Phone Card 2: Contact */}
              <motion.div
                 initial={{ rotateX: 5, rotateY: -10 }}
                 whileInView={{ rotateX: 5, rotateY: -10 }}
                 whileHover={{ rotateX: 0, rotateY: 0, scale: 1.02, z: 20 }}
                 transition={{ type: "spring", stiffness: 200, damping: 20 }}
                 className="bg-[#050505] border-2 border-brand-500 shadow-[12px_12px_0px_0px_#104d00] rounded-[2.5rem] p-8 relative overflow-hidden"
                 style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-b-xl border-b border-brand-500/50 z-20 shadow-[0_2px_10px_rgba(57,255,20,0.2)]"></div>
                
                <div className="relative z-10 flex flex-col justify-between items-start gap-4">
                  <div>
                     <h3 className="font-display text-4xl text-brand-500 uppercase text-3d-brand leading-none">ANDANCEOS</h3>
                     <p className="font-display text-xl text-white tracking-widest uppercase mt-4 block p-2 bg-[#104d00] border border-brand-500 shadow-[4px_4px_0px_#188000]">FOUNDER & AUTOMATION EXPERT</p>
                  </div>
                  <div className="space-y-4 w-full mt-4 border-t border-[#1f1f1f] pt-6 overflow-hidden">
                     <p className="flex items-center gap-2 sm:gap-3 font-display text-xs sm:text-[1.1rem] md:text-xl text-white uppercase">
                       <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 shrink-0" />
                       <span className="truncate">ANTRUONG.VINDANCE@GMAIL.COM</span>
                     </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM VS. SOLUTION (Brutalist 3D Box Match) */}
      <section className="py-16 lg:py-24 bg-[#050505] relative border-b border-[#1f1f1f]">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0"></div>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wider mb-4 drop-shadow-md text-3d-white">
              ĐỪNG ĐỂ VẬN HÀNH <br className="sm:hidden" /> THỦ CÔNG <br/><span className="text-red-500 inline-block mt-2" style={{textShadow: "2px 2px 0 #7f1d1d, 4px 4px 0 #450a0a"}}>ĐÁNH CẮP THỜI GIAN</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto align-stretch perspective-1000">
            {/* TRUYỀN THỐNG (Red 3D Box) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ translateZ: 20 }}
               className="bg-[#0a0a0a] border-4 border-red-600 p-8 md:p-10 shadow-[12px_12px_0px_0px_#7f1d1d] relative"
               style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="font-display text-4xl text-red-500 uppercase mb-8 border-b border-red-900 pb-6 flex items-center gap-4" style={{textShadow: "2px 2px 0 #7f1d1d, 4px 4px 0 #450a0a"}}>
                 <XCircle className="w-10 h-10 text-red-500" /> TRUYỀN THỐNG
              </h3>
              <ul className="space-y-6 relative z-10 font-sans text-lg font-medium text-slate-300">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-red-900 border-2 border-red-500 font-bold flex items-center justify-center text-white shadow-[4px_4px_0_#7f1d1d]">✕</div>
                  <p>Xác nhận học phí chậm trễ khiến phụ huynh/học viên hoang mang, phải chờ đợi.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-red-900 border-2 border-red-500 font-bold flex items-center justify-center text-white shadow-[4px_4px_0_#7f1d1d]">✕</div>
                  <p>Chăm sóc cảm tính: Nhớ thì nhắn, quên thì thôi. Khách hàng dễ rụng vì thiếu tương tác.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-red-900 border-2 border-red-500 font-bold flex items-center justify-center text-white shadow-[4px_4px_0_#7f1d1d]">✕</div>
                  <p>Lãnh đạo mắc kẹt: Trở thành "thợ giải quyết sự cố", cả ngày cắm mặt check group Zalo.</p>
                </li>
              </ul>
            </motion.div>

            {/* AI AUTOMATION (Neon Green 3D Box) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               whileHover={{ translateZ: 20 }}
               className="bg-[#051a00] border-4 border-brand-500 p-8 md:p-10 shadow-[12px_12px_0px_0px_#104d00]"
               style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="font-display text-4xl text-brand-500 uppercase mb-8 border-b border-[#188000] pb-6 flex items-center gap-4 text-3d-brand">
                 <CheckCircle2 className="w-10 h-10 text-brand-500 drop-shadow-[0_0_10px_#39FF14]" /> AI AUTOMATION
              </h3>
              <ul className="space-y-6 relative z-10 font-sans text-lg font-medium text-brand-50">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-brand-500 border-2 border-white font-bold flex items-center justify-center text-black shadow-[4px_4px_0_#104d00]">✓</div>
                  <p>Trải nghiệm chuẩn 5 sao: Tự động gửi thông báo, lịch học, biên lai tức thì và mượt mà.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-brand-500 border-2 border-white font-bold flex items-center justify-center text-black shadow-[4px_4px_0_#104d00]">✓</div>
                  <p>Vòng lặp tương tác tự động: AI kịch bản hóa việc nhắc nhở định kỳ, giải phóng nhân sự.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 shrink-0 bg-brand-500 border-2 border-white font-bold flex items-center justify-center text-black shadow-[4px_4px_0_#104d00]">✓</div>
                  <p>Lãnh đạo rảnh tay: Nắm toàn bộ tình hình kinh doanh qua báo cáo Real-time từ bất cứ đâu.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE MODULES (Interactive Flowchart) */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a] relative border-b border-[#1f1f1f]">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 max-w-6xl mx-auto"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3">
               <div className="w-6 h-6 sm:w-8 sm:h-8 shrink-0 bg-brand-500 shadow-[2px_2px_0px_#104d00] sm:shadow-[4px_4px_0px_#104d00]"></div>
               <h2 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider text-3d-white">HỆ THỐNG MODULES</h2>
            </div>
            <p className="text-slate-400 font-sans text-base sm:text-lg md:text-xl font-medium tracking-wide pl-9 sm:pl-12">
               KHÔNG "VẼ" HỆ THỐNG CỒNG KỀNH. ĐAU Ở ĐÂU, TỰ ĐỘNG HÓA Ở ĐÓ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[600px]">
            
            {/* Sidebar Tabs */}
            <div className="lg:col-span-3 flex flex-col gap-2 relative">
               <div className="absolute top-0 right-0 bottom-0 w-px bg-[#1f1f1f] hidden lg:block"></div>
               {moduleFlows.map((m, idx) => (
                   <div 
                     key={m.id}
                     onClick={() => setActiveTab(idx)}
                     className={`relative p-6 cursor-pointer transition-all duration-300 rounded-s-xl ${
                       activeTab === idx 
                         ? 'bg-gradient-to-r from-transparent to-[#111] pr-10' 
                         : 'hover:bg-[#111]/50 pr-8'
                     }`}
                   >
                     {/* Active Indicator Line */}
                     {activeTab === idx && (
                       <motion.div 
                         layoutId="activeTabIndicator"
                         className="absolute -right-px top-0 bottom-0 w-[3px] bg-brand-500 shadow-[0_0_15px_#39FF14] z-10"
                       />
                     )}
                     
                     <h3 className={`font-display text-2xl uppercase font-bold transition-colors ${
                       activeTab === idx ? 'text-brand-500 drop-shadow-[0_0_10px_rgba(57,255,20,0.5)]' : 'text-slate-400'
                     }`}>
                       {m.title}
                     </h3>
                     <p className={`text-sm mt-3 font-medium transition-colors ${
                       activeTab === idx ? 'text-slate-300' : 'text-slate-600'
                     }`}>
                       {m.desc}
                     </p>
                   </div>
               ))}
               
               <div className="p-6 mt-8">
                 <a href="#cta-footer" className="text-brand-500 font-sans text-sm hover:underline flex items-center gap-2 transition-all">
                   Chưa có modules bạn cần, yêu cầu ngay <ArrowRight className="w-4 h-4" />
                 </a>
               </div>
            </div>

            {/* Diagram Canvas */}
            <div className="lg:col-span-9 bg-[#050505] rounded-3xl border border-[#1f1f1f] relative overflow-x-auto overflow-y-hidden flex items-center justify-start xl:justify-center p-8 lg:p-12 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] custom-scrollbar">
               {/* Background Grid Pattern specifically for Diagram */}
               <div className="absolute inset-0 opacity-20 pointer-events-none min-w-[700px]" style={{ backgroundImage: "linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>
               
               {/* Central Active Diagram */}
               <motion.div 
                 key={activeTab} 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.4 }}
                 className="relative z-10 w-full min-w-[700px] flex items-center justify-center scale-90 md:scale-100"
               >
                  {/* ORIGINAL HORIZONTAL FLOWCHART FOR ALL MODULES */}
                  <>
                     {/* Left Column (Trigger) */}
                       <div className="flex flex-col items-center shrink-0 w-32 relative z-20">
                          <div className="w-16 h-16 rounded-xl bg-[#0a0a0a] border border-slate-700 flex items-center justify-center relative shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                             <div className="absolute -top-2 -left-2 w-6 h-6 rounded-md bg-[#1f1f1f] border border-slate-600 flex items-center justify-center">
                               <Zap className="w-3 h-3 text-brand-500" />
                             </div>
                             {React.createElement(moduleFlows[activeTab].trigger.icon, { className: "w-8 h-8 text-[#a3a3a3]" })}
                          </div>
                          <span className="text-[11px] font-medium text-slate-400 mt-4 text-center whitespace-pre-line leading-tight">
                             {moduleFlows[activeTab].trigger.label}
                          </span>
                       </div>

                       {/* Horizontal Connector 1 */}
                       <div className="w-12 sm:w-20 lg:w-32 h-px bg-slate-700 relative shrink-0">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-400"></div>
                       </div>

                       {/* Center Column (Main Core) */}
                       <div className="flex flex-col items-center shrink-0 relative z-20">
                          <div className="w-56 h-28 rounded-2xl bg-[#0a0a0a] border border-brand-500/50 shadow-[0_0_30px_rgba(57,255,20,0.1)] flex flex-col items-center justify-center gap-2 relative overflow-hidden group hover:border-brand-500 transition-colors">
                             <div className="absolute inset-0 bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="flex items-center gap-3">
                                {React.createElement(moduleFlows[activeTab].main.icon, { className: "w-7 h-7 text-brand-500" })}
                                <span className="text-white font-sans font-bold whitespace-pre-line leading-tight">
                                  {moduleFlows[activeTab].main.label}
                                </span>
                             </div>
                             <span className="text-xs text-brand-500/80 font-mono tracking-widest">{moduleFlows[activeTab].main.sub}</span>
                          </div>
                          
                          {/* Floating memory/tool nodes hanging below main block to mimic reference */}
                          <div className="absolute top-[100%] pt-6 flex gap-4 w-full justify-center">
                             <div className="flex flex-col items-center gap-1">
                                <div className="w-px h-6 bg-slate-700 absolute -top-1"></div>
                                <div className="w-10 h-10 rounded-full border border-slate-700 bg-[#111] flex items-center justify-center">
                                   <Database className="w-4 h-4 text-slate-400" />
                                </div>
                                <span className="text-[9px] text-slate-500 uppercase">Memory</span>
                             </div>
                             <div className="flex flex-col items-center gap-1">
                                <div className="w-px h-6 bg-slate-700 absolute -top-1"></div>
                                <div className="w-10 h-10 rounded-full border border-slate-700 bg-[#111] flex items-center justify-center">
                                   <Network className="w-4 h-4 text-slate-400" />
                                </div>
                                <span className="text-[9px] text-slate-500 uppercase">API</span>
                             </div>
                          </div>
                       </div>

                       {/* Horizontal Connector 2 -> Condition Box */}
                       <div className="w-10 sm:w-16 h-px bg-slate-700 relative shrink-0">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-400"></div>
                       </div>

                       {/* Condition Node */}
                       <div className="flex flex-col items-center shrink-0 w-24 relative z-20">
                          <div className="w-14 h-14 rounded-lg bg-green-900/40 border border-brand-500/50 flex items-center justify-center">
                            <Share2 className="w-6 h-6 text-brand-500" />
                          </div>
                          <span className="text-[11px] font-medium text-slate-400 mt-2 text-center whitespace-pre-line leading-tight">
                            {moduleFlows[activeTab].conditions}
                          </span>
                       </div>

                       {/* Branching Connectors to Outputs */}
                       <div className="w-10 sm:w-16 flex flex-col items-end shrink-0 relative h-40">
                          <div className="absolute left-0 top-5 w-full h-px bg-slate-700"></div>
                          <div className="absolute left-0 bottom-5 w-full h-px bg-slate-700"></div>
                          <div className="absolute left-0 top-5 bottom-5 w-px bg-slate-700"></div>
                          
                          <div className="absolute right-0 top-5 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-400"></div>
                          <div className="absolute right-0 bottom-5 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-slate-400"></div>
                       </div>

                       {/* Right Column (Outputs) */}
                       <div className="flex flex-col justify-between h-40 shrink-0 w-36 relative z-20">
                          {/* Output 1 (Top) */}
                          <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-slate-700 flex items-center justify-center shadow-lg">
                                {React.createElement(moduleFlows[activeTab].outputs[0].icon, { className: "w-5 h-5 text-brand-500" })}
                             </div>
                             <span className="text-[11px] font-medium text-slate-300 whitespace-pre-line leading-tight">
                                {moduleFlows[activeTab].outputs[0].label}
                             </span>
                             <div className="absolute -right-8 top-5 w-6 h-6 border border-slate-600 rounded-sm flex items-center justify-center shrink-0 opacity-50">
                                <span className="text-slate-400 text-xs">+</span>
                             </div>
                          </div>
                          
                          {/* Output 2 (Bottom) */}
                          <div className="flex items-center gap-3">
                             <div className="w-12 h-12 rounded-xl bg-[#1f1f1f] border border-slate-700 flex items-center justify-center shadow-lg">
                                {React.createElement(moduleFlows[activeTab].outputs[1].icon, { className: "w-5 h-5 text-brand-500" })}
                             </div>
                             <span className="text-[11px] font-medium text-slate-300 whitespace-pre-line leading-tight">
                                {moduleFlows[activeTab].outputs[1].label}
                             </span>
                             <div className="absolute -right-8 bottom-5 w-6 h-6 border border-slate-600 rounded-sm flex items-center justify-center shrink-0 opacity-50">
                                <span className="text-slate-400 text-xs">+</span>
                             </div>
                          </div>
                       </div>
                    </>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* SCARCITY OFFER BANNER */}
      <section className="py-12 bg-[#0a0a0a] relative border-b border-[#1f1f1f]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#050505]/80 w-full backdrop-blur-xl border border-brand-500/50 rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_0_30px_rgba(57,255,20,0.15)] relative overflow-hidden group"
          >
            {/* Pulsing glow line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-500 shadow-[0_0_15px_#39FF14] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-500 shadow-[0_0_15px_#39FF14] animate-pulse opacity-40"></div>
            <div className="absolute top-0 left-0 w-[3px] h-full bg-brand-500 shadow-[0_0_15px_#39FF14] animate-pulse opacity-40"></div>
            <div className="absolute right-0 top-0 w-[3px] h-full bg-brand-500 shadow-[0_0_15px_#39FF14] animate-pulse opacity-40"></div>

            <div className="text-center mb-8 relative z-10">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-wider flex justify-center items-center gap-2 sm:gap-3 text-center flex-wrap">
                <span className="text-3xl sm:text-4xl shadow-none">🎁</span> 
                <span className="text-brand-500 drop-shadow-[0_0_15px_rgba(57,255,20,0.6)]">ĐẶC QUYỀN "FOUNDING MEMBER"</span>
              </h2>
              <p className="mt-2 text-red-500 font-sans font-bold text-sm sm:text-lg animate-pulse">(GIỚI HẠN 100 SLOT)</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 md:gap-6 mb-8 relative z-10">
               <div className="flex items-start gap-3 bg-[#111] border border-brand-900/40 p-5 rounded-2xl flex-1 w-full relative overflow-hidden group-hover:border-brand-500/30 transition-colors">
                 <div className="w-8 h-8 shrink-0 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500 font-bold border border-brand-500/50 shadow-[0_0_10px_rgba(57,255,20,0.2)]">✓</div>
                 <div>
                   <h4 className="text-brand-400 font-sans font-bold text-sm sm:text-base md:text-lg mb-1">Giá Early Bird</h4>
                   <p className="text-slate-400 text-xs sm:text-sm font-medium">Mức phí Setup ưu đãi nhất.</p>
                 </div>
               </div>

               <div className="flex items-start gap-3 bg-[#111] border border-brand-900/40 p-5 rounded-2xl flex-1 w-full relative overflow-hidden group-hover:border-brand-500/30 transition-colors">
                 <div className="w-8 h-8 shrink-0 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500 font-bold border border-brand-500/50 shadow-[0_0_10px_rgba(57,255,20,0.2)]">✓</div>
                 <div>
                   <h4 className="text-brand-400 font-sans font-bold text-sm sm:text-base md:text-lg mb-1">Module Tùy Chỉnh</h4>
                   <p className="text-slate-400 text-xs sm:text-sm font-medium">Đặc quyền "order" thiết kế luồng AI Automation riêng.</p>
                 </div>
               </div>

               <div className="flex items-start gap-3 bg-[#111] border border-brand-900/40 p-5 rounded-2xl flex-1 w-full relative overflow-hidden group-hover:border-brand-500/30 transition-colors">
                 <div className="w-8 h-8 shrink-0 rounded-full bg-brand-900/50 flex items-center justify-center text-brand-500 font-bold border border-brand-500/50 shadow-[0_0_10px_rgba(57,255,20,0.2)]">✓</div>
                 <div>
                   <h4 className="text-brand-400 font-sans font-bold text-sm sm:text-base md:text-lg mb-1">1-1 Cùng Founder</h4>
                   <p className="text-slate-400 text-xs sm:text-sm font-medium">Đích thân tôi tinh chỉnh luồng cho bạn.</p>
                 </div>
               </div>
            </div>

            <div className="relative z-10 border-t border-[#1f1f1f] pt-8 flex flex-col gap-3">
              <div className="flex justify-between items-end">
                <span className="text-slate-300 font-sans font-medium text-xs sm:text-sm">🔴 Đang xử lý:</span>
                <span className="text-brand-500 font-display font-bold text-sm sm:text-lg tracking-wider">79 / 100 Slot</span>
              </div>
              <div className="w-full h-2 sm:h-3 bg-[#1f1f1f] rounded-full overflow-hidden shadow-inner flex mb-6">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '79%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-brand-500 rounded-full shadow-[0_0_10px_#39FF14] relative overflow-hidden"
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:40px_40px] animate-slide"></div>
                </motion.div>
              </div>
              
              <a 
                href="#cta-footer" 
                className="w-full sm:w-auto mx-auto px-8 py-4 bg-brand-500 text-black font-display text-xl sm:text-2xl font-bold uppercase border-2 border-brand-950 shadow-[6px_6px_0px_0px_#104d00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#104d00] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150 flex items-center justify-center gap-2 text-center"
              >
                GIỮ SLOT NGAY
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 5. PRICING (Brutalist Pricing Boxes) */}
      <section className="py-16 lg:py-24 bg-[#050505] relative border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-wider mb-4 drop-shadow-md text-3d-white">
              TINH GỌN GIẢI PHÁP <br/><span className="text-brand-500 text-3d-brand block mt-2">NGAY HÔM NAY</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start perspective-1000">
            {/* Starter */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: 0 }}
               whileHover={{ translateZ: 20 }}
               className="bg-[#050505] border-4 border-brand-500 shadow-[12px_12px_0px_0px_#104d00] p-8 lg:-mt-8 relative flex flex-col md:col-span-2 lg:col-span-1"
               style={{ transformStyle: "preserve-3d" }}
            >
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 border-2 border-brand-950 text-black px-6 py-1 font-display font-bold text-lg lg:text-xl uppercase shadow-[6px_6px_0_#104d00] whitespace-nowrap">
                 DỄ BẮT ĐẦU NHẤT
               </div>
               <h3 className="text-3xl lg:text-4xl font-display font-bold text-brand-500 text-3d-brand uppercase mt-4 mb-6 pb-6 border-b-4 border-brand-950">MUA MODULE LẺ</h3>
               <p className="text-slate-300 font-sans text-lg mb-2 font-medium flex-grow">
                 Giải quyết triệt để 1 khâu duy nhất mà trung tâm bạn đang làm thủ công tốn thời gian nhất. Cắm và chạy ngay.
               </p>
               <p className="text-brand-500/80 font-sans text-sm mb-8 font-medium italic">
                 (VD: Chỉ setup báo tiền Zalo, hoặc Chỉ làm auto nhắc lịch).
               </p>
               <a href="#cta-footer" className="w-full py-4 px-4 bg-brand-500 text-black font-display text-2xl font-bold uppercase border-2 border-brand-950 shadow-[6px_6px_0px_0px_#104d00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#104d00] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all mt-auto text-center block">CHỌN MODULE</a>
            </motion.div>

            {/* Pro */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: 0.2 }}
               whileHover={{ translateZ: 20 }}
               className="bg-[#050505] border-4 border-[#1f1f1f] shadow-[12px_12px_0px_0px_#111] p-8 hover:border-brand-500 hover:shadow-[12px_12px_0px_0px_#104d00] transition-all flex flex-col"
               style={{ transformStyle: "preserve-3d" }}
            >
               <h3 className="text-3xl lg:text-4xl font-display font-bold text-white uppercase mb-6 pb-6 border-b-4 border-[#1f1f1f]">COMBO VẬN HÀNH CƠ BẢN</h3>
               <p className="text-white font-sans text-lg mb-8 font-bold flex-grow">
                 Bê nguyên bộ khung tự động hóa cốt lõi tôi đang áp dụng cho trung tâm của mình. Đủ dùng, dễ hiểu, không dư thừa một tính năng nào. Dành cho trung tâm quy mô vừa & nhỏ.
               </p>
               <a href="#cta-footer" className="w-full py-4 px-2 bg-[#111] text-white font-display text-xl lg:text-2xl font-bold uppercase border-2 border-slate-700 shadow-[6px_6px_0px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#111] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all mt-auto whitespace-nowrap overflow-hidden text-ellipsis text-center block">XEM CHI TIẾT LỘ TRÌNH</a>
            </motion.div>

            {/* Enterprise */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: 0.4 }}
               whileHover={{ translateZ: 20 }}
               className="bg-[#050505] border-4 border-[#1f1f1f] shadow-[12px_12px_0px_0px_#111] p-8 hover:border-brand-500 hover:shadow-[12px_12px_0px_0px_#104d00] transition-all flex flex-col"
               style={{ transformStyle: "preserve-3d" }}
            >
               <h3 className="text-3xl lg:text-4xl font-display font-bold text-white uppercase mb-6 pb-6 border-b-4 border-[#1f1f1f]">"CAFE"<br/>GIẢI MÃ QUY TRÌNH</h3>
               <p className="text-slate-300 font-sans text-lg mb-8 font-medium flex-grow">
                 Bạn có một quy trình đặc thù của trung tâm đang phải làm tay rất cực? Đặt lịch trò chuyện, tôi sẽ nghe bài toán của bạn và thử biến nó thành 1 module tự động hoàn toàn mới.
               </p>
               <a href="#cta-footer" className="w-full py-4 px-4 bg-[#111] text-white font-display text-xl lg:text-2xl font-bold uppercase border-2 border-slate-700 shadow-[6px_6px_0px_0px_#111] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#111] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all mt-auto whitespace-nowrap overflow-hidden text-ellipsis text-center block">KẾT NỐI 1-1</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a] relative border-b border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5 }}
             className="flex flex-col items-center text-center mb-16"
          >
             <div className="w-8 h-8 bg-brand-500 shadow-[4px_4px_0px_#104d00] mb-6"></div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider text-3d-white mb-4">
               CÂU HỎI THƯỜNG GẶP
             </h2>
             <p className="text-slate-400 font-sans text-base sm:text-lg md:text-xl font-medium tracking-wide">
               Giải đáp nhanh các thắc mắc trước khi bạn quyết định tự động hóa.
             </p>
          </motion.div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-4 transition-colors duration-300 ${openFaqIndex === index ? 'border-brand-500 bg-[#111]' : 'border-[#1f1f1f] bg-[#050505] hover:border-slate-700'}`}
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6 md:p-8 cursor-pointer"
                >
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white pr-8">
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 text-brand-500' : 'text-slate-500'}`}>
                    <ChevronDown className="w-8 h-8" />
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaqIndex === index ? 'auto' : 0,
                    opacity: openFaqIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-6 md:p-8 pt-0 text-slate-300 font-sans text-lg font-medium border-t border-[#1f1f1f] mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. CTA / FOOTER */}
      <footer id="cta-footer" className="pt-20 lg:pt-32 pb-16 bg-[#050505] relative overflow-hidden">
        {/* Footermrk Box */}
        <div className="absolute bottom-0 left-0 right-0 text-[12vw] leading-none font-display font-black text-[#111] whitespace-nowrap z-0 overflow-hidden select-none">
          EDU-PRENEUR
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase mb-10 md:mb-12 leading-tight tracking-wide text-3d-white">
            NGỪNG LÀM THUÊ CHO CHÍNH TRUNG TÂM CỦA BẠN. <br className="hidden md:block" /><span className="text-brand-500 text-3d-brand block mt-2 md:mt-4">TRỞ THÀNH EDU-PRENEUR.</span>
          </h2>
          
          <a 
            href="https://qsgcrbbi7we6.sg.larksuite.com/share/base/form/shrlgj9mladqeF9Cw5RwNny1yjd?chunked=false"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 md:px-12 md:py-6 border-4 border-brand-950 bg-brand-500 text-black font-display font-black text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase shadow-[6px_6px_0px_0px_#104d00] md:shadow-[8px_8px_0px_0px_#104d00] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#104d00] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all duration-150 flex items-center justify-center gap-2 sm:gap-4 mb-20 md:mb-24 text-center"
          >
            TƯ VẤN LẮP RÁP MODULE (1-1)
          </a>
          
          <div className="border-t border-[#1f1f1f] pt-8 md:pt-10 w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-slate-500 font-display text-xs sm:text-sm md:text-base uppercase tracking-widest font-bold">
            <p className="text-white text-center md:text-left">© 2026 Edu OS - Built by AnDanceOS.</p>
            <div className="flex gap-6 md:gap-10 text-center">
              <span className="text-slate-400 normal-case tracking-normal font-sans font-medium text-[10px] sm:text-xs md:text-sm">Sản phẩm thuộc hệ sinh thái kỹ thuật số AnDanceOS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
