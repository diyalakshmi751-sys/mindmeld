<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# ECOSORTVISION

## Basic Details

### Team Name: mindmeld

### Team Members
- Member 1: MANYA M - AHALIA SCHOOL OF ENGINEERING AND TECHNOLOGY
- Member 2: DIYALAKSHMI - AHALIA SCHOOL OF ENGINEERING AND TECHNOLOGY

### Hosted Project Link
https://mindmeld-green.vercel.app/index.html

### Project Description
EcoSort Vision is an AI-based system that uses a webcam to identify and sort waste automatically. It helps improve recycling, reduce pollution, and encourages eco-friendly behavior through a points-based reward system.


### The Problem statement
Improper waste segregation causes environmental pollution and reduces recycling efficiency. Manual waste sorting is time-consuming, unhygienic, and prone to errors. There is a need for an automated system that can accurately identify and sort waste using AI to improve recycling and promote sustainable waste management.

### The Solution
Improper waste segregation leads to pollution and inefficient recycling because people often throw waste in the wrong bins. Manual sorting is slow, unhygienic, and inaccurate. This project aims to use AI to automatically identify and sort waste correctly, making recycling easier and more effective

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: JavaScript, html, css
- Libraries used: teachable machine
- Tools used:  VS Code, Git 

**For Hardware:**
- Main components: [List main components]
- Specifications: [Technical specifications]
- Tools required: visual studio code,git,web browser

---

## Features

List the key features of your project:
- Feature 1: AI-Based Waste Detection
Uses real-time computer vision to automatically identify waste items such as plastic, paper, and metal using a webcam.
The project uses artificial intelligence and computer vision to detect waste items in real time through a webcam. This allows the system to identify different types of waste accurately without any manual input from the user.


Feature 2: Automatic Waste Classification
Classifies detected waste into the correct category instantly without any manual sorting by the user.
The system automatically classifies the detected waste into the correct category, such as plastic, paper, or metal. This reduces human effort, minimizes sorting errors, and improves overall recycling efficiency.


Feature 3: Real-Time Confidence Display
Shows live prediction results with confidence percentages to indicate how accurately the waste has been identified.
The system shows live prediction results along with confidence percentages for each detected waste item. This helps users understand how accurately the waste has been identified and builds trust in the AI-based classification process.


Feature 4: User Engagement with Gamification
Encourages proper waste disposal by awarding points for correct sorting, promoting eco-friendly behavior.
The project includes a points-based reward system that gives users points for correctly sorted waste. This feature motivates users to participate actively, promotes environmentally responsible behavior, and makes waste segregation more engaging and interactive.



---

[Explain how to set up the circuit]

## Implementation

### For Software:

#### Installation
```bash
# No installation required for local demo
# Just ensure an internet connection for loading libraries
```

#### Run
```bash
# Open the project folder
# Double-click index.html
# OR open index.html using any modern web browser[Run commands - e.g., npm start, python app.py]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*

![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*

![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
*Explain your system architecture - components, data flow, tech stack interaction*

**Application Workflow:**

![Workflow](docs/workflow.png)
*Add caption explaining your workflow*

---

### For Hardware:
computer/laptop
 processor:dual core orhigher
 RAM:minimum4GB
 Power Supply

For running the computer/laptop

Internet Connection

Required only for loading AI libraries and model files
 

#### Schematic & Circuit

![Circuit]The circuit diagram shows a webcam connected to a computer system. The webcam captures live images of waste items and sends the data to the computer, where the AI-based image classification model processes the input. Since the system is software-driven and browser-based, no additional electronic components or physical wiring are required.

![Schematic]The schematic diagram illustrates the flow of data in the system. The webcam acts as the input device, capturing images of waste materials. These images are processed by the AI model running in the web browser, which classifies the waste into appropriate categories. The output is displayed on the screen in real time along with confidence scores and user points.

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
https://drive.google.com/file/d/1ZVIjaCcr8O2YMSyfFJoVjBTqRP8Yc_SF/view?usp=sharing

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [e.g., GitHub Copilot, v0.dev, Cursor, ChatGPT, Claude]

**Purpose:** [What you used it for]
- Example: "Generated boilerplate React components"
- Example: "Debugging assistance for async functions"
- Example: "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- contribution of Team Members:

Manya m: Designe: Trained the AI model, handled data collection and testing, managed the points system, and prepared the project documentation and presentation.d and developed the website interface, implemented the AI waste detection using computer vision, and integrated the real-time classification system.
diyalakshmi: Trained the AI model, handled data collection and testing, managed the points system, and prepared the project documentation and presentation.


---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
