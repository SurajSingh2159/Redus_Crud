import { Container, Row, Col } from 'reactstrap'

interface Props {
  children: React.ReactNode
}

const FormContainer = ({ children }: Props) => {
  return (
    <Container className='py-3'>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer