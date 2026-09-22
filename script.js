const screen = document.getElementById("screen");
const input = document.getElementById("command");

function print(text, className = "") {
  const line = document.createElement("div");
  line.className = className;
  line.innerHTML = text;
  screen.appendChild(line);
  screen.scrollTop = screen.scrollHeight;
}

function runCommand(command) {
  command = command.trim().toLowerCase();

  print(`<br><span class="prompt">root@cyber:~$</span> ${command}`);

  if (command === "help") {
    print("AVAILABLE COMMANDS:");
    print("  scan          - Scan the demo target");
    print("  check-login   - Check demo login security");
    print("  password-test - Test password strength locally");
    print("  headers       - Show demo security headers");
    print("  report        - Generate security report");
    print("  clear         - Clear terminal");
    print("  about         - About this terminal");
  }

  else if (command === "scan") {
    print("[*] Initialising authorized scan...");
    setTimeout(() => print("[+] Target: LOCAL-DEMO-LOCKER", "blue"), 400);
    setTimeout(() => print("[+] Port simulation: COMPLETE", "blue"), 800);
    setTimeout(() => print("[+] Login endpoint: FOUND", "blue"), 1200);
    setTimeout(() => print("[+] Scan complete.", "green"), 1600);
  }

  else if (command === "check-login") {
    print("[*] Checking demo login configuration...");
    setTimeout(() => print("[+] Rate-limit simulation: ENABLED", "green"), 700);
    setTimeout(() => print("[!] Password policy: BASIC", "yellow"), 1200);
    setTimeout(() => print("[+] No real account was accessed.", "green"), 1600);
  }

  else if (command === "password-test") {
    const password = prompt(
      "Enter a password for LOCAL strength testing only:"
    );

    if (!password) {
      print("[!] Test cancelled.", "yellow");
      return;
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    print("[*] Analysing password locally...");

    setTimeout(() => {
      if (score <= 2) {
        print("[!] PASSWORD STRENGTH: WEAK", "red");
      } else if (score <= 4) {
        print("[!] PASSWORD STRENGTH: MEDIUM", "yellow");
      } else {
        print("[+] PASSWORD STRENGTH: STRONG", "green");
      }

      print("[+] Password was tested locally and was not uploaded.");
    }, 900);
  }

  else if (command === "headers") {
    print("[*] Inspecting simulated security configuration...");
    setTimeout(() => print("[+] HTTPS: ENABLED", "green"), 500);
    setTimeout(() => print("[+] Content-Security-Policy: PRESENT", "green"), 900);
    setTimeout(() => print("[!] Demo environment only.", "yellow"), 1300);
  }

  else if (command === "report") {
    print("========== SECURITY REPORT ==========");
    print("Target: LOCAL-DEMO-LOCKER");
    print("Status: TEST ENVIRONMENT");
    print("Login policy: BASIC");
    print("Rate limiting: ENABLED");
    print("Password testing: LOCAL ONLY");
    print("Real accounts accessed: 0");
    print("=====================================");
  }

  else if (command === "about") {
    print("CYBER TERMINAL v1.0");
    print("Educational cybersecurity simulator.");
    print("Designed for authorized testing and learning.");
  }

  else if (command === "clear") {
    screen.innerHTML = "";
  }

  else if (command === "") {
    return;
  }

  else {
    print(`Command not found: ${command}`, "red");
    print("Type <b>help</b> for available commands.");
  }
}

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    runCommand(input.value);
    input.value = "";
  }
});

document.addEventListener("click", () => {
  input.focus();
});
