

// class Database
// {

// 	private $server = "mysql:host=localhost;dbname=ecomm";
// 	private $username = "root";
// 	private $password = "";
// 	private $options  = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,);
// 	protected $conn;

// 	public function open()
// 	{
// 		try {
// 			header("Access-Control-Allow-Origin: http://localhost:4200");

// 			header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// 			header("Access-Control-Allow-Headers: Content-Type, Authorization");

// 			header("Access-Control-Allow-Credentials: true");

// 			header("Access-Control-Max-Age: 86400");
// 			$this->conn = new PDO($this->server, $this->username, $this->password, $this->options);
// 			return $this->conn;
// 		} catch (PDOException $e) {
// 			echo "There is some problem in connection: " . $e->getMessage();
// 		}
// 	}

// 	public function close()
// 	{
// 		$this->conn = null;
// 	}
// }

// $pdo = new Database();
