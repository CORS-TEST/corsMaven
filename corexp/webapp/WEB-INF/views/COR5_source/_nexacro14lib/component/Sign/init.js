function init_cross()
{
	var Ret;


  

	var policies = "";
 	
	 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.1"    + "|";          // �ѱ���������               ����
    policies +="1.2.410.200004.5.2.1.2"    + "|";          // �ѱ���������               ����      
	policies +="1.2.410.200004.5.1.1.7"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200005.1.1.5"      + "|";          // ����������                 ����, ���Ǵ�ü, ���λ����
	policies +="1.2.410.200004.5.3.1.1"    + "|";          // �ѱ������                 ���(������� �� �񿵸����)
	policies +="1.2.410.200004.5.3.1.2"    + "|";          // �ѱ������                 ����(������� �� �񿵸������  ������ �������, ����)
	policies +="1.2.410.200004.5.4.1.2"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200012.1.1.3"      + "|";          // �ѱ������������           ����
	policies +="1.2.410.200004.5.4.1.3"    + "|";          // 

	
	Ret =  _doc.CC_Object_id.SetCommonInfoFromVal("211.192.169.70",4502, 
														"211.192.169.180",389, 
														"211.192.169.180",389,
														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
														"no",
														policies);
	if ( Ret != 0 )
	{ 
		alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
		return false;
	}
	else
	{
		Ret =  _doc.CC_Object_id.SetPKCSInform(1, 0, 0, 0, 0, 0, 0, 1, "SEED");
		if ( Ret != 0 )
		{ 
			alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
			return false;
		}
		else
		{
			return true;
		}
	}	
}
/* PNP ������Ʈ�� ������ ���� �߰� 2011-03-03*/
function init_cross_p()
{
	var Ret;

	var policies = "";
		 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.2"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200004.5.1.1.5"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200005.1.1.1"      + "|";          // ����������                 ����                                             
	policies +="1.2.410.200004.5.3.1.4"    + "|";          // �ѱ������           ����(�������, ������� �� ������ �Ҽ����� ��)   
	policies +="1.2.410.200004.5.4.1.1"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200012.1.1.1"      + "|";          // �ѱ������������           ����   	
	 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.1"    + "|";          // �ѱ���������               ����
	policies +="1.2.410.200004.5.1.1.7"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200005.1.1.5"      + "|";          // ����������                 ����, ���Ǵ�ü, ���λ����
	policies +="1.2.410.200004.5.3.1.1"    + "|";          // �ѱ������                 ���(������� �� �񿵸����)
	policies +="1.2.410.200004.5.3.1.2"    + "|";          // �ѱ������                 ����(������� �� �񿵸������  ������ �������, ����)
	policies +="1.2.410.200004.5.4.1.2"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200012.1.1.3"      + "|";          // �ѱ������������           ����
	policies +="1.2.410.200004.5.4.1.3"    + "|";          // 

	
	Ret =  document.CC_Object_id.SetCommonInfoFromVal("211.192.169.70",4502, 
														"211.192.169.180",389, 
														"211.192.169.180",389,
														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
														"no",
														policies);
	if ( Ret != 0 )
	{ 
		alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
		return false;
	}
	else
	{
		Ret =  document.CC_Object_id.SetPKCSInform(1, 0, 0, 0, 0, 0, 0, 1, "SEED");
		if ( Ret != 0 )
		{ 
			alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
			return false;
		}
		else
		{
			return true;
		}
	}	
}

/* PNP �뵵���ѿ��������� (��Ʈ�ʰ���) ���� �߰� 2012-02-09*/
function init_cross_t()
{
	var Ret;

	var policies = "";
		 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.2"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200004.5.1.1.5"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200005.1.1.1"      + "|";          // ����������                 ����                                             
	policies +="1.2.410.200004.5.3.1.4"    + "|";          // �ѱ������           ����(�������, ������� �� ������ �Ҽ����� ��)   
	policies +="1.2.410.200004.5.4.1.1"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200012.1.1.1"      + "|";          // �ѱ������������           ����   	
	 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.1"    + "|";          // �ѱ���������               ����
	policies +="1.2.410.200004.5.1.1.7"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200005.1.1.5"      + "|";          // ����������                 ����, ���Ǵ�ü, ���λ����
	policies +="1.2.410.200004.5.3.1.1"    + "|";          // �ѱ������                 ���(������� �� �񿵸����)
	policies +="1.2.410.200004.5.3.1.2"    + "|";          // �ѱ������                 ����(������� �� �񿵸������  ������ �������, ����)
	policies +="1.2.410.200004.5.4.1.2"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200012.1.1.3"      + "|";          // �ѱ������������           ����
	policies +="1.2.410.200004.5.4.1.3"    + "|";          // 
    policies +="1.2.410.200004.5.4.2.377"    + "|";          // �뵵���ѿ�(���ڼ��ݰ�꼭) 2012-03-14 �߰� (����)
    policies +="1.2.410.200004.5.4.2.378"    + "|";          // �뵵���ѿ�(���) 2012-03-14 �߰� (����)
	policies +="1.2.410.200004.5.4.2.379"    + "|";          // �뵵���ѿ�(����)


	
	Ret =  document.CC_Object_id.SetCommonInfoFromVal("211.192.169.70",4502, 
														"211.192.169.180",389, 
														"211.192.169.180",389,
														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
														"no",
														policies);
	if ( Ret != 0 )
	{ 
		alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
		return false;
	}
	else
	{
		Ret =  document.CC_Object_id.SetPKCSInform(1, 0, 0, 0, 0, 0, 0, 1, "SEED");
		if ( Ret != 0 )
		{ 
			alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
			return false;
		}
		else
		{
			return true;
		}
	}	
}

/* PNP �뵵���ѿ��������� (����) ���� �߰� 2012-02-09*/
function init_cross_c()
{
	var Ret;

	var policies = "";
		 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.2"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200004.5.1.1.5"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200005.1.1.1"      + "|";          // ����������                 ����                                             
	policies +="1.2.410.200004.5.3.1.4"    + "|";          // �ѱ������           ����(�������, ������� �� ������ �Ҽ����� ��)   
	policies +="1.2.410.200004.5.4.1.1"    + "|";          // �ѱ���������               ����                                             
	policies +="1.2.410.200012.1.1.1"      + "|";          // �ѱ������������           ����   	
	 /* ���λ�ȣ������(����) */                            //
	policies +="1.2.410.200004.5.2.1.1"    + "|";          // �ѱ���������               ����
	policies +="1.2.410.200004.5.1.1.7"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200005.1.1.5"      + "|";          // ����������                 ����, ���Ǵ�ü, ���λ����
	policies +="1.2.410.200004.5.3.1.1"    + "|";          // �ѱ������                 ���(������� �� �񿵸����)
	policies +="1.2.410.200004.5.3.1.2"    + "|";          // �ѱ������                 ����(������� �� �񿵸������  ������ �������, ����)
	policies +="1.2.410.200004.5.4.1.2"    + "|";          // �ѱ���������               ����, ��ü, ���λ����
	policies +="1.2.410.200012.1.1.3"      + "|";          // �ѱ������������           ����
	policies +="1.2.410.200004.5.4.1.3"    + "|";          // 
	policies +="1.2.410.200004.5.4.2.378"    + "|";          // �뵵���ѿ�(���)
	policies +="1.2.410.200004.5.4.2.379"    + "|";          // �뵵���ѿ�(����)


	
	Ret =  document.CC_Object_id.SetCommonInfoFromVal("211.192.169.70",4502, 
														"211.192.169.180",389, 
														"211.192.169.180",389,
														"CN=ROOT-RSA-CRL,OU=ROOTCA,O=KISA,C=KR",
														"no",
														policies);
	if ( Ret != 0 )
	{ 
		alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
		return false;
	}
	else
	{
		Ret =  document.CC_Object_id.SetPKCSInform(1, 0, 0, 0, 0, 0, 0, 1, "SEED");
		if ( Ret != 0 )
		{ 
			alert( "���� �ʱ� ������ �����Ͽ����ϴ�." );
			return false;
		}
		else
		{
			return true;
		}
	}	
}