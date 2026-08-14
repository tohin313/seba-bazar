import Header from "@/components/Header";

const services = [
  ["🏠", "বাড়ি / ফ্ল্যাট", "বাসা খোঁজা, ভাড়া ও স্থানান্তরসহ সহায়তা"],
  ["🔧", "ইলেকট্রিক / প্লাম্বিং", "ইলেকট্রিক, পানি ও মেরামতের কাজ"],
  ["❄️", "AC / Appliance", "AC ও ঘরের যন্ত্রের সার্ভিস"],
  ["💻", "কম্পিউটার / মোবাইল", "টেকনিক্যাল সহায়তা"],
  ["📄", "ডকুমেন্ট / অনলাইন", "ফর্ম, আবেদন ও ডিজিটাল কাজ"],
  ["🚗", "গাড়ি / মোটরসাইকেল", "সার্ভিসিং ও লোকাল সহায়তা"],
  ["📦", "ডেলিভারি / পিকআপ", "লোকাল সংগ্রহ ও পৌঁছে দেওয়া"],
  ["✨", "অন্যান্য", "আপনার প্রয়োজন লিখে জানান"]
];

export default function Home() {
  return (
    <>
      <Header />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <small className="eyebrow">সারা বাংলাদেশে সেবা • কক্সবাজার থেকে যাত্রা</small>
            <h1>সারা বাংলাদেশের প্রয়োজনের <em>সেবা</em>, এক জায়গায়।</h1>
            <p>
              বাংলাদেশের যেকোনো এলাকার প্রয়োজনীয় সেবার জন্য আপনার বিস্তারিত অনুরোধ পাঠান।
              আমরা এলাকা ও প্রয়োজন বুঝে যোগাযোগ করব এবং উপযুক্ত সমাধানের ব্যবস্থা করার চেষ্টা করব।
            </p>
            <div className="actions">
              <a className="btn" href="/request">সেবা অনুরোধ করুন →</a>
              <a className="btn light" href="#services">সেবাগুলো দেখুন</a>
            </div>
            <div className="trust">✓ সারা বাংলাদেশ　 ✓ এলাকা অনুযায়ী সহায়তা　 ✓ আগে কথা, পরে কাজ</div>
          </div>

          <div className="card">
            <b>● নতুন সেবা অনুরোধ</b>
            <div className="person">র　<strong>রহিম আহমেদ</strong><small>বাংলাদেশ</small><i>নতুন</i></div>
            <div className="box">
              <small>প্রয়োজন</small>
              <strong>বাসার ইলেকট্রিক কাজ</strong>
              <p>সুইচ ও কয়েকটি লাইট ঠিক করতে হবে।</p>
            </div>
            <div className="meta">📍 এলাকা অনুযায়ী সেবা <span>আজ</span></div>
            <div className="bar"><i /></div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="wrap">
          <div><b>বাংলাদেশ</b><small>দেশব্যাপী প্ল্যাটফর্ম</small></div>
          <div><b>কক্সবাজার</b><small>প্রথম launch market</small></div>
          <div><b>দ্রুত</b><small>রিকোয়েস্ট রিভিউ</small></div>
          <div><b>সহজ</b><small>অনলাইন অনুরোধ</small></div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="wrap">
          <small className="eyebrow">আমাদের সেবা</small>
          <h2>আপনার কী প্রয়োজন?</h2>
          <p className="sub">বাংলাদেশের যেকোনো এলাকার প্রয়োজনের জন্য অনুরোধ পাঠাতে পারেন।</p>
          <div className="grid services">
            {services.map((x) => (
              <a className="service" key={x[1]} href="/request">
                <span className="icon">{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="section alt">
        <div className="wrap center">
          <small className="eyebrow">সহজ ৪ ধাপ</small>
          <h2>কীভাবে কাজ করে?</h2>
          <div className="grid steps">
            {[
              ["01", "📝", "রিকোয়েস্ট পাঠান", "আপনার প্রয়োজন লিখুন।"],
              ["02", "📞", "আমরা যোগাযোগ করি", "তথ্য দেখে আপনার সাথে কথা বলব।"],
              ["03", "💬", "ফি ও কাজ ঠিক করুন", "কাজের আগে ফি আলোচনা হবে।"],
              ["04", "🤝", "সেবা সম্পন্ন", "সম্মতি হলে কাজ সম্পন্ন।"]
            ].map((x) => (
              <div key={x[0]}><b>{x[0]}</b><span className="stepicon">{x[1]}</span><h3>{x[2]}</h3><p>{x[3]}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap about">
          <div>
            <small className="eyebrow">সেবা বাজার</small>
            <h2>সারা বাংলাদেশের প্রয়োজনের জন্য সহজ সেবা সমাধান।</h2>
          </div>
          <p>
            সেবা বাজারের লক্ষ্য হলো সারা বাংলাদেশের মানুষের প্রয়োজনীয় সেবা খুঁজে পাওয়ার
            ও অনুরোধ করার প্রক্রিয়াটি সহজ করা। আমরা কক্সবাজার থেকে যাত্রা শুরু করছি
            এবং ধাপে ধাপে দেশের অন্যান্য এলাকায় বিস্তৃত হব।
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap foot">
          <div>
            <a className="brand">স সেবা বাজার<span>.</span>কম</a>
            <p>আপনার প্রয়োজনের সেবা, এক জায়গায়।</p>
          </div>
          <div>
            <b>দ্রুত লিংক</b>
            <a href="/request">সেবা চাই</a>
            <a href="/track">রিকোয়েস্ট ট্র্যাক</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
          <div>
            <b>পরিধি</b>
            <span>সারা বাংলাদেশ</span>
            <span>শুরু কক্সবাজার থেকে</span>
          </div>
        </div>
        <div className="copy">© 2026 সেবা বাজার. সর্বস্বত্ব সংরক্ষিত।</div>
      </footer>
    </>
  );
}