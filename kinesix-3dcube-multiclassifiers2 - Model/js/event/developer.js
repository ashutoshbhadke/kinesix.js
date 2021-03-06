var dir,i,posture;

function movey(ydist)
{
	if(ydist<0)
		for(i=0;i>ydist;i-=1)
		{
			cube.translateY( -1 );
			renderfun();
		}
			
	else
		for(i=0;i<ydist;i+=1)
		{
			cube.translateY( 1 );
			renderfun();
		}
}

function movez(zdist)
{
	if(zdist<0)
		for(i=0;i>zdist;i-=1)
		{
			cube.translateZ( -1 );
			renderfun();
		}
			
	else
		for(i=0;i<zdist;i+=1)
		{
			cube.translateZ( 1 );
			renderfun();
		}
}

function move(zydist,zmul,ymul)
{
	for(i=0;i<zydist;i+=1)
	{
		cube.translateZ( 1*zmul );
		cube.translateY( 1*ymul );
		renderfun();
	}
}

function distance(event)
{
	var i;
	p=event.detail.dist;	
	//console.log("dist: "+p);
	
	if(posture==1)
	{
		switch(dir)
		{
			case 1:
			case 10:
				for(i=0;i<p/4;i++)
					cube.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
				break;
				
			case 7:
			case 4:
				for(i=0;i<p/4;i++)
					cube.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
				break;
				/*
			case 10:
				for(i=0;i<p;i++)
					cube.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
				break;
			
			case 4:
				for(i=0;i<p;i++)
					cube.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
				break;*/
		}
	}
	
	else if(posture==2)
	{		
		switch(dir)
		{
			case 1:			//1st quad -z -y
				move(p,-Math.cos(event.detail.angle*0.01745),-Math.sin(event.detail.angle*0.01745));
				break;
				
			case 4:			//2nd quad z -y
				move(p,Math.sin(event.detail.angle*0.01745),-Math.cos(event.detail.angle*0.01745));
				break;
				
			case 7:			//3rd quad z y
				move(p,Math.cos(event.detail.angle*0.01745),Math.sin(event.detail.angle*0.01745));
				break;
				
			case 10:		//4th quad -z y
				move(p,-Math.sin(event.detail.angle*0.01745),Math.cos(event.detail.angle*0.01745));
				break;
		}
	}
}

function posture(event)
{
	//console.log("pos: "+event.detail.post);
	posture=event.detail.post;
}

function direction(event)
{
	dir=event.detail.dir;
	//console.log("dir: "+dir);
}