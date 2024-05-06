const codeBlocks = {
  axios: `function Axios() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching data: ', error.message)
      }
    }

    fetchData()
  }, [])

  return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
  )
}`,

  useQuery: `function UseQuery() {
  const { data: users, error, isLoading } = useQuery('userData', fetchUsers)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>An error occurred: {error.message}</div>

  return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
  )
}`,
}

export default codeBlocks
