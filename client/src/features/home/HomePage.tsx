import { Container, Divider, Paper, Typography } from '@mui/material';
import { useAppSelector } from '../../app/store/configureStore';

export default function HomePage() {
  const { user } = useAppSelector((state) => state.account);

  return (
    <Container
      component={Paper}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
        mt: 4,
      }}
    >
      <>
        <Typography variant='h2' pb={2}>
          Home Page
        </Typography>

        {user ? (
          <Typography variant='h5' color='primary'>
            You are logged in
          </Typography>
        ) : (
          <Typography variant='h5' color='error'>
            You are not logged in
          </Typography>
        )}
        <Divider />
        <Typography variant='h4' pt={4}>
          User Roles:
        </Typography>

        {user ? (
          user?.roles?.map((role) => (
            <Typography variant='h5' key={role}>
              {role}
            </Typography>
          ))
        ) : (
          <Typography variant='h5'>Guest</Typography>
        )}
      </>
    </Container>
  );
}
